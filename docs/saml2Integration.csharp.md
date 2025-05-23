# `saml2Integration` Submodule <a name="`saml2Integration` Submodule" id="@cdktf/provider-snowflake.saml2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Saml2Integration <a name="Saml2Integration" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration snowflake_saml2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2Integration(Construct Scope, string Id, Saml2IntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig">Saml2IntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig">Saml2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns">ResetAllowedEmailPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains">ResetAllowedUserDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated">ResetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn">ResetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl">ResetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat">ResetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest">ResetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl">ResetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl">ResetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel">ResetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts"></a>

```csharp
private void PutTimeouts(Saml2IntegrationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

---

##### `ResetAllowedEmailPatterns` <a name="ResetAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns"></a>

```csharp
private void ResetAllowedEmailPatterns()
```

##### `ResetAllowedUserDomains` <a name="ResetAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains"></a>

```csharp
private void ResetAllowedUserDomains()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSaml2EnableSpInitiated` <a name="ResetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated"></a>

```csharp
private void ResetSaml2EnableSpInitiated()
```

##### `ResetSaml2ForceAuthn` <a name="ResetSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn"></a>

```csharp
private void ResetSaml2ForceAuthn()
```

##### `ResetSaml2PostLogoutRedirectUrl` <a name="ResetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl"></a>

```csharp
private void ResetSaml2PostLogoutRedirectUrl()
```

##### `ResetSaml2RequestedNameidFormat` <a name="ResetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat"></a>

```csharp
private void ResetSaml2RequestedNameidFormat()
```

##### `ResetSaml2SignRequest` <a name="ResetSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest"></a>

```csharp
private void ResetSaml2SignRequest()
```

##### `ResetSaml2SnowflakeAcsUrl` <a name="ResetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl"></a>

```csharp
private void ResetSaml2SnowflakeAcsUrl()
```

##### `ResetSaml2SnowflakeIssuerUrl` <a name="ResetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl"></a>

```csharp
private void ResetSaml2SnowflakeIssuerUrl()
```

##### `ResetSaml2SpInitiatedLoginPageLabel` <a name="ResetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel"></a>

```csharp
private void ResetSaml2SpInitiatedLoginPageLabel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Saml2Integration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Saml2Integration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Saml2Integration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Saml2Integration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Saml2Integration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Saml2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Saml2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput">AllowedEmailPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput">AllowedUserDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput">EnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput">Saml2EnableSpInitiatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput">Saml2ForceAuthnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput">Saml2IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput">Saml2PostLogoutRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput">Saml2ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput">Saml2RequestedNameidFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput">Saml2SignRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput">Saml2SnowflakeAcsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput">Saml2SnowflakeIssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput">Saml2SpInitiatedLoginPageLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput">Saml2SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput">Saml2X509CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns">AllowedEmailPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains">AllowedUserDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled">Enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer">Saml2Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider">Saml2Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput"></a>

```csharp
public Saml2IntegrationDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput"></a>

```csharp
public Saml2IntegrationShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts"></a>

```csharp
public Saml2IntegrationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a>

---

##### `AllowedEmailPatternsInput`<sup>Optional</sup> <a name="AllowedEmailPatternsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput"></a>

```csharp
public string[] AllowedEmailPatternsInput { get; }
```

- *Type:* string[]

---

##### `AllowedUserDomainsInput`<sup>Optional</sup> <a name="AllowedUserDomainsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput"></a>

```csharp
public string[] AllowedUserDomainsInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput"></a>

```csharp
public string EnabledInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="Saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput"></a>

```csharp
public string Saml2EnableSpInitiatedInput { get; }
```

- *Type:* string

---

##### `Saml2ForceAuthnInput`<sup>Optional</sup> <a name="Saml2ForceAuthnInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput"></a>

```csharp
public string Saml2ForceAuthnInput { get; }
```

- *Type:* string

---

##### `Saml2IssuerInput`<sup>Optional</sup> <a name="Saml2IssuerInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput"></a>

```csharp
public string Saml2IssuerInput { get; }
```

- *Type:* string

---

##### `Saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput"></a>

```csharp
public string Saml2PostLogoutRedirectUrlInput { get; }
```

- *Type:* string

---

##### `Saml2ProviderInput`<sup>Optional</sup> <a name="Saml2ProviderInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput"></a>

```csharp
public string Saml2ProviderInput { get; }
```

- *Type:* string

---

##### `Saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="Saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput"></a>

```csharp
public string Saml2RequestedNameidFormatInput { get; }
```

- *Type:* string

---

##### `Saml2SignRequestInput`<sup>Optional</sup> <a name="Saml2SignRequestInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput"></a>

```csharp
public string Saml2SignRequestInput { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput"></a>

```csharp
public string Saml2SnowflakeAcsUrlInput { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput"></a>

```csharp
public string Saml2SnowflakeIssuerUrlInput { get; }
```

- *Type:* string

---

##### `Saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```csharp
public string Saml2SpInitiatedLoginPageLabelInput { get; }
```

- *Type:* string

---

##### `Saml2SsoUrlInput`<sup>Optional</sup> <a name="Saml2SsoUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput"></a>

```csharp
public string Saml2SsoUrlInput { get; }
```

- *Type:* string

---

##### `Saml2X509CertInput`<sup>Optional</sup> <a name="Saml2X509CertInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput"></a>

```csharp
public string Saml2X509CertInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowedEmailPatterns`<sup>Required</sup> <a name="AllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns"></a>

```csharp
public string[] AllowedEmailPatterns { get; }
```

- *Type:* string[]

---

##### `AllowedUserDomains`<sup>Required</sup> <a name="AllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains"></a>

```csharp
public string[] AllowedUserDomains { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled"></a>

```csharp
public string Enabled { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Saml2EnableSpInitiated`<sup>Required</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated"></a>

```csharp
public string Saml2EnableSpInitiated { get; }
```

- *Type:* string

---

##### `Saml2ForceAuthn`<sup>Required</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn"></a>

```csharp
public string Saml2ForceAuthn { get; }
```

- *Type:* string

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer"></a>

```csharp
public string Saml2Issuer { get; }
```

- *Type:* string

---

##### `Saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl"></a>

```csharp
public string Saml2PostLogoutRedirectUrl { get; }
```

- *Type:* string

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider"></a>

```csharp
public string Saml2Provider { get; }
```

- *Type:* string

---

##### `Saml2RequestedNameidFormat`<sup>Required</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat"></a>

```csharp
public string Saml2RequestedNameidFormat { get; }
```

- *Type:* string

---

##### `Saml2SignRequest`<sup>Required</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest"></a>

```csharp
public string Saml2SignRequest { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl"></a>

```csharp
public string Saml2SnowflakeAcsUrl { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl"></a>

```csharp
public string Saml2SnowflakeIssuerUrl { get; }
```

- *Type:* string

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel"></a>

```csharp
public string Saml2SpInitiatedLoginPageLabel { get; }
```

- *Type:* string

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl"></a>

```csharp
public string Saml2SsoUrl { get; }
```

- *Type:* string

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert"></a>

```csharp
public string Saml2X509Cert { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Saml2IntegrationConfig <a name="Saml2IntegrationConfig" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Saml2Issuer,
    string Saml2Provider,
    string Saml2SsoUrl,
    string Saml2X509Cert,
    string[] AllowedEmailPatterns = null,
    string[] AllowedUserDomains = null,
    string Comment = null,
    string Enabled = null,
    string Id = null,
    string Saml2EnableSpInitiated = null,
    string Saml2ForceAuthn = null,
    string Saml2PostLogoutRedirectUrl = null,
    string Saml2RequestedNameidFormat = null,
    string Saml2SignRequest = null,
    string Saml2SnowflakeAcsUrl = null,
    string Saml2SnowflakeIssuerUrl = null,
    string Saml2SpInitiatedLoginPageLabel = null,
    Saml2IntegrationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer">Saml2Issuer</a></code> | <code>string</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider">Saml2Provider</a></code> | <code>string</code> | The string describing the IdP. Valid options are: `OKTA` \| `ADFS` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>string</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>string</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns">AllowedEmailPatterns</a></code> | <code>string[]</code> | A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains">AllowedUserDomains</a></code> | <code>string[]</code> | A list of email domains that can authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled">Enabled</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#id Saml2Integration#id}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>string</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>string</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | The string containing the label to display after the Log In With button on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#name Saml2Integration#name}

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer"></a>

```csharp
public string Saml2Issuer { get; set; }
```

- *Type:* string

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_issuer Saml2Integration#saml2_issuer}

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider"></a>

```csharp
public string Saml2Provider { get; set; }
```

- *Type:* string

The string describing the IdP. Valid options are: `OKTA` | `ADFS` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_provider Saml2Integration#saml2_provider}

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl"></a>

```csharp
public string Saml2SsoUrl { get; set; }
```

- *Type:* string

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_sso_url Saml2Integration#saml2_sso_url}

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert"></a>

```csharp
public string Saml2X509Cert { get; set; }
```

- *Type:* string

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_x509_cert Saml2Integration#saml2_x509_cert}

---

##### `AllowedEmailPatterns`<sup>Optional</sup> <a name="AllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns"></a>

```csharp
public string[] AllowedEmailPatterns { get; set; }
```

- *Type:* string[]

A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#allowed_email_patterns Saml2Integration#allowed_email_patterns}

---

##### `AllowedUserDomains`<sup>Optional</sup> <a name="AllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains"></a>

```csharp
public string[] AllowedUserDomains { get; set; }
```

- *Type:* string[]

A list of email domains that can authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#allowed_user_domains Saml2Integration#allowed_user_domains}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#comment Saml2Integration#comment}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled"></a>

```csharp
public string Enabled { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#enabled Saml2Integration#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#id Saml2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Saml2EnableSpInitiated`<sup>Optional</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated"></a>

```csharp
public string Saml2EnableSpInitiated { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in With button on the login page. FALSE: does not display the Log in With button on the login page. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_enable_sp_initiated Saml2Integration#saml2_enable_sp_initiated}

---

##### `Saml2ForceAuthn`<sup>Optional</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn"></a>

```csharp
public string Saml2ForceAuthn { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_force_authn Saml2Integration#saml2_force_authn}

---

##### `Saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```csharp
public string Saml2PostLogoutRedirectUrl { get; set; }
```

- *Type:* string

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_post_logout_redirect_url Saml2Integration#saml2_post_logout_redirect_url}

---

##### `Saml2RequestedNameidFormat`<sup>Optional</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat"></a>

```csharp
public string Saml2RequestedNameidFormat { get; set; }
```

- *Type:* string

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` | `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` | `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` | `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` | `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_requested_nameid_format Saml2Integration#saml2_requested_nameid_format}

---

##### `Saml2SignRequest`<sup>Optional</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest"></a>

```csharp
public string Saml2SignRequest { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_sign_request Saml2Integration#saml2_sign_request}

---

##### `Saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```csharp
public string Saml2SnowflakeAcsUrl { get; set; }
```

- *Type:* string

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_snowflake_acs_url Saml2Integration#saml2_snowflake_acs_url}

---

##### `Saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```csharp
public string Saml2SnowflakeIssuerUrl { get; set; }
```

- *Type:* string

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_snowflake_issuer_url Saml2Integration#saml2_snowflake_issuer_url}

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```csharp
public string Saml2SpInitiatedLoginPageLabel { get; set; }
```

- *Type:* string

The string containing the label to display after the Log In With button on the login page.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#saml2_sp_initiated_login_page_label Saml2Integration#saml2_sp_initiated_login_page_label}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts"></a>

```csharp
public Saml2IntegrationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#timeouts Saml2Integration#timeouts}

---

### Saml2IntegrationDescribeOutput <a name="Saml2IntegrationDescribeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutput {

};
```


### Saml2IntegrationDescribeOutputAllowedEmailPatterns <a name="Saml2IntegrationDescribeOutputAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputAllowedEmailPatterns {

};
```


### Saml2IntegrationDescribeOutputAllowedUserDomains <a name="Saml2IntegrationDescribeOutputAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputAllowedUserDomains {

};
```


### Saml2IntegrationDescribeOutputComment <a name="Saml2IntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputComment {

};
```


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed {

};
```


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiated <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2EnableSpInitiated {

};
```


### Saml2IntegrationDescribeOutputSaml2ForceAuthn <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2ForceAuthn {

};
```


### Saml2IntegrationDescribeOutputSaml2Issuer <a name="Saml2IntegrationDescribeOutputSaml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2Issuer {

};
```


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl {

};
```


### Saml2IntegrationDescribeOutputSaml2Provider <a name="Saml2IntegrationDescribeOutputSaml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2Provider {

};
```


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat {

};
```


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed {

};
```


### Saml2IntegrationDescribeOutputSaml2SignRequest <a name="Saml2IntegrationDescribeOutputSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SignRequest {

};
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl {

};
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl {

};
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata {

};
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert {

};
```


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel {

};
```


### Saml2IntegrationDescribeOutputSaml2SsoUrl <a name="Saml2IntegrationDescribeOutputSaml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SsoUrl {

};
```


### Saml2IntegrationDescribeOutputSaml2X509Cert <a name="Saml2IntegrationDescribeOutputSaml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509Cert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509Cert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2X509Cert {

};
```


### Saml2IntegrationShowOutput <a name="Saml2IntegrationShowOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationShowOutput {

};
```


### Saml2IntegrationTimeouts <a name="Saml2IntegrationTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#create Saml2Integration#create}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#delete Saml2Integration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#read Saml2Integration#read}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#update Saml2Integration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#create Saml2Integration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#delete Saml2Integration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#read Saml2Integration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/saml2_integration#update Saml2Integration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Saml2IntegrationDescribeOutputAllowedEmailPatternsList <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputAllowedEmailPatternsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputAllowedEmailPatterns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a>

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsList <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputAllowedUserDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputAllowedUserDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a>

---


### Saml2IntegrationDescribeOutputCommentList <a name="Saml2IntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputCommentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputCommentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputCommentOutputReference <a name="Saml2IntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputComment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a>

---


### Saml2IntegrationDescribeOutputList <a name="Saml2IntegrationDescribeOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputOutputReference <a name="Saml2IntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns">AllowedEmailPatterns</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains">AllowedUserDomains</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed">Saml2DigestMethodsUsed</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer">Saml2Issuer</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider">Saml2Provider</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed">Saml2SignatureMethodsUsed</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest">Saml2SignRequest</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata">Saml2SnowflakeMetadata</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeX509Cert">Saml2SnowflakeX509Cert</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList">Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2X509Cert">Saml2X509Cert</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList">Saml2IntegrationDescribeOutputSaml2X509CertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedEmailPatterns`<sup>Required</sup> <a name="AllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns"></a>

```csharp
public Saml2IntegrationDescribeOutputAllowedEmailPatternsList AllowedEmailPatterns { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a>

---

##### `AllowedUserDomains`<sup>Required</sup> <a name="AllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains"></a>

```csharp
public Saml2IntegrationDescribeOutputAllowedUserDomainsList AllowedUserDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment"></a>

```csharp
public Saml2IntegrationDescribeOutputCommentList Comment { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a>

---

##### `Saml2DigestMethodsUsed`<sup>Required</sup> <a name="Saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList Saml2DigestMethodsUsed { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a>

---

##### `Saml2EnableSpInitiated`<sup>Required</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList Saml2EnableSpInitiated { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a>

---

##### `Saml2ForceAuthn`<sup>Required</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2ForceAuthnList Saml2ForceAuthn { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a>

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2IssuerList Saml2Issuer { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a>

---

##### `Saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList Saml2PostLogoutRedirectUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a>

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2ProviderList Saml2Provider { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a>

---

##### `Saml2RequestedNameidFormat`<sup>Required</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList Saml2RequestedNameidFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a>

---

##### `Saml2SignatureMethodsUsed`<sup>Required</sup> <a name="Saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList Saml2SignatureMethodsUsed { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a>

---

##### `Saml2SignRequest`<sup>Required</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SignRequestList Saml2SignRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a>

---

##### `Saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList Saml2SnowflakeAcsUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a>

---

##### `Saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList Saml2SnowflakeIssuerUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a>

---

##### `Saml2SnowflakeMetadata`<sup>Required</sup> <a name="Saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList Saml2SnowflakeMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a>

---

##### `Saml2SnowflakeX509Cert`<sup>Required</sup> <a name="Saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeX509Cert"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList Saml2SnowflakeX509Cert { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList">Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList</a>

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList Saml2SpInitiatedLoginPageLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a>

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SsoUrlList Saml2SsoUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a>

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2X509Cert"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2X509CertList Saml2X509Cert { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList">Saml2IntegrationDescribeOutputSaml2X509CertList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a>

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2EnableSpInitiated InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a>

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnList <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2ForceAuthnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2ForceAuthn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a>

---


### Saml2IntegrationDescribeOutputSaml2IssuerList <a name="Saml2IntegrationDescribeOutputSaml2IssuerList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2IssuerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2IssuerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2IssuerOutputReference <a name="Saml2IntegrationDescribeOutputSaml2IssuerOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2IssuerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2Issuer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a>

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2ProviderList <a name="Saml2IntegrationDescribeOutputSaml2ProviderList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2ProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2ProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2ProviderOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ProviderOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2ProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2Provider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a>

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a>

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2SignRequestList <a name="Saml2IntegrationDescribeOutputSaml2SignRequestList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SignRequestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SignRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert">Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509CertOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert">Saml2IntegrationDescribeOutputSaml2SnowflakeX509Cert</a>

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a>

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlList <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SsoUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2SsoUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2X509CertList <a name="Saml2IntegrationDescribeOutputSaml2X509CertList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2X509CertList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.get"></a>

```csharp
private Saml2IntegrationDescribeOutputSaml2X509CertOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2X509CertOutputReference <a name="Saml2IntegrationDescribeOutputSaml2X509CertOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationDescribeOutputSaml2X509CertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509Cert">Saml2IntegrationDescribeOutputSaml2X509Cert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509CertOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationDescribeOutputSaml2X509Cert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2X509Cert">Saml2IntegrationDescribeOutputSaml2X509Cert</a>

---


### Saml2IntegrationShowOutputList <a name="Saml2IntegrationShowOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get"></a>

```csharp
private Saml2IntegrationShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Saml2IntegrationShowOutputOutputReference <a name="Saml2IntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue"></a>

```csharp
public Saml2IntegrationShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a>

---


### Saml2IntegrationTimeoutsOutputReference <a name="Saml2IntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Saml2IntegrationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



