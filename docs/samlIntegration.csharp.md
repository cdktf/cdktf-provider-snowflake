# `samlIntegration` Submodule <a name="`samlIntegration` Submodule" id="@cdktf/provider-snowflake.samlIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIntegration <a name="SamlIntegration" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration snowflake_saml_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SamlIntegration(Construct Scope, string Id, SamlIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig">SamlIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig">SamlIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated">ResetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn">ResetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl">ResetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat">ResetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest">ResetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl">ResetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl">ResetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert">ResetSaml2SnowflakeX509Cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel">ResetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSaml2EnableSpInitiated` <a name="ResetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated"></a>

```csharp
private void ResetSaml2EnableSpInitiated()
```

##### `ResetSaml2ForceAuthn` <a name="ResetSaml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn"></a>

```csharp
private void ResetSaml2ForceAuthn()
```

##### `ResetSaml2PostLogoutRedirectUrl` <a name="ResetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl"></a>

```csharp
private void ResetSaml2PostLogoutRedirectUrl()
```

##### `ResetSaml2RequestedNameidFormat` <a name="ResetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat"></a>

```csharp
private void ResetSaml2RequestedNameidFormat()
```

##### `ResetSaml2SignRequest` <a name="ResetSaml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest"></a>

```csharp
private void ResetSaml2SignRequest()
```

##### `ResetSaml2SnowflakeAcsUrl` <a name="ResetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl"></a>

```csharp
private void ResetSaml2SnowflakeAcsUrl()
```

##### `ResetSaml2SnowflakeIssuerUrl` <a name="ResetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl"></a>

```csharp
private void ResetSaml2SnowflakeIssuerUrl()
```

##### `ResetSaml2SnowflakeX509Cert` <a name="ResetSaml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert"></a>

```csharp
private void ResetSaml2SnowflakeX509Cert()
```

##### `ResetSaml2SpInitiatedLoginPageLabel` <a name="ResetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel"></a>

```csharp
private void ResetSaml2SpInitiatedLoginPageLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SamlIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SamlIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SamlIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SamlIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SamlIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed">Saml2DigestMethodsUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed">Saml2SignatureMethodsUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata">Saml2SnowflakeMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput">Saml2EnableSpInitiatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput">Saml2ForceAuthnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput">Saml2IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput">Saml2PostLogoutRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput">Saml2ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput">Saml2RequestedNameidFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput">Saml2SignRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput">Saml2SnowflakeAcsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput">Saml2SnowflakeIssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput">Saml2SnowflakeX509CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput">Saml2SpInitiatedLoginPageLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput">Saml2SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput">Saml2X509CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer">Saml2Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider">Saml2Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert">Saml2SnowflakeX509Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Saml2DigestMethodsUsed`<sup>Required</sup> <a name="Saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed"></a>

```csharp
public string Saml2DigestMethodsUsed { get; }
```

- *Type:* string

---

##### `Saml2SignatureMethodsUsed`<sup>Required</sup> <a name="Saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed"></a>

```csharp
public string Saml2SignatureMethodsUsed { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeMetadata`<sup>Required</sup> <a name="Saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata"></a>

```csharp
public string Saml2SnowflakeMetadata { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="Saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput"></a>

```csharp
public object Saml2EnableSpInitiatedInput { get; }
```

- *Type:* object

---

##### `Saml2ForceAuthnInput`<sup>Optional</sup> <a name="Saml2ForceAuthnInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput"></a>

```csharp
public object Saml2ForceAuthnInput { get; }
```

- *Type:* object

---

##### `Saml2IssuerInput`<sup>Optional</sup> <a name="Saml2IssuerInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput"></a>

```csharp
public string Saml2IssuerInput { get; }
```

- *Type:* string

---

##### `Saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput"></a>

```csharp
public string Saml2PostLogoutRedirectUrlInput { get; }
```

- *Type:* string

---

##### `Saml2ProviderInput`<sup>Optional</sup> <a name="Saml2ProviderInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput"></a>

```csharp
public string Saml2ProviderInput { get; }
```

- *Type:* string

---

##### `Saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="Saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput"></a>

```csharp
public string Saml2RequestedNameidFormatInput { get; }
```

- *Type:* string

---

##### `Saml2SignRequestInput`<sup>Optional</sup> <a name="Saml2SignRequestInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput"></a>

```csharp
public object Saml2SignRequestInput { get; }
```

- *Type:* object

---

##### `Saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput"></a>

```csharp
public string Saml2SnowflakeAcsUrlInput { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput"></a>

```csharp
public string Saml2SnowflakeIssuerUrlInput { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeX509CertInput`<sup>Optional</sup> <a name="Saml2SnowflakeX509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput"></a>

```csharp
public string Saml2SnowflakeX509CertInput { get; }
```

- *Type:* string

---

##### `Saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```csharp
public string Saml2SpInitiatedLoginPageLabelInput { get; }
```

- *Type:* string

---

##### `Saml2SsoUrlInput`<sup>Optional</sup> <a name="Saml2SsoUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput"></a>

```csharp
public string Saml2SsoUrlInput { get; }
```

- *Type:* string

---

##### `Saml2X509CertInput`<sup>Optional</sup> <a name="Saml2X509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput"></a>

```csharp
public string Saml2X509CertInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Saml2EnableSpInitiated`<sup>Required</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated"></a>

```csharp
public object Saml2EnableSpInitiated { get; }
```

- *Type:* object

---

##### `Saml2ForceAuthn`<sup>Required</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn"></a>

```csharp
public object Saml2ForceAuthn { get; }
```

- *Type:* object

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer"></a>

```csharp
public string Saml2Issuer { get; }
```

- *Type:* string

---

##### `Saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl"></a>

```csharp
public string Saml2PostLogoutRedirectUrl { get; }
```

- *Type:* string

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider"></a>

```csharp
public string Saml2Provider { get; }
```

- *Type:* string

---

##### `Saml2RequestedNameidFormat`<sup>Required</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat"></a>

```csharp
public string Saml2RequestedNameidFormat { get; }
```

- *Type:* string

---

##### `Saml2SignRequest`<sup>Required</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest"></a>

```csharp
public object Saml2SignRequest { get; }
```

- *Type:* object

---

##### `Saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl"></a>

```csharp
public string Saml2SnowflakeAcsUrl { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl"></a>

```csharp
public string Saml2SnowflakeIssuerUrl { get; }
```

- *Type:* string

---

##### `Saml2SnowflakeX509Cert`<sup>Required</sup> <a name="Saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert"></a>

```csharp
public string Saml2SnowflakeX509Cert { get; }
```

- *Type:* string

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel"></a>

```csharp
public string Saml2SpInitiatedLoginPageLabel { get; }
```

- *Type:* string

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl"></a>

```csharp
public string Saml2SsoUrl { get; }
```

- *Type:* string

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert"></a>

```csharp
public string Saml2X509Cert { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIntegrationConfig <a name="SamlIntegrationConfig" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SamlIntegrationConfig {
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
    object Enabled = null,
    string Id = null,
    object Saml2EnableSpInitiated = null,
    object Saml2ForceAuthn = null,
    string Saml2PostLogoutRedirectUrl = null,
    string Saml2RequestedNameidFormat = null,
    object Saml2SignRequest = null,
    string Saml2SnowflakeAcsUrl = null,
    string Saml2SnowflakeIssuerUrl = null,
    string Saml2SnowflakeX509Cert = null,
    string Saml2SpInitiatedLoginPageLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer">Saml2Issuer</a></code> | <code>string</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider">Saml2Provider</a></code> | <code>string</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>string</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>string</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>object</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>object</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>string</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>object</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>string</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert">Saml2SnowflakeX509Cert</a></code> | <code>string</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer"></a>

```csharp
public string Saml2Issuer { get; set; }
```

- *Type:* string

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider"></a>

```csharp
public string Saml2Provider { get; set; }
```

- *Type:* string

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl"></a>

```csharp
public string Saml2SsoUrl { get; set; }
```

- *Type:* string

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert"></a>

```csharp
public string Saml2X509Cert { get; set; }
```

- *Type:* string

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Saml2EnableSpInitiated`<sup>Optional</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated"></a>

```csharp
public object Saml2EnableSpInitiated { get; set; }
```

- *Type:* object

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `Saml2ForceAuthn`<sup>Optional</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn"></a>

```csharp
public object Saml2ForceAuthn { get; set; }
```

- *Type:* object

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `Saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```csharp
public string Saml2PostLogoutRedirectUrl { get; set; }
```

- *Type:* string

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `Saml2RequestedNameidFormat`<sup>Optional</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat"></a>

```csharp
public string Saml2RequestedNameidFormat { get; set; }
```

- *Type:* string

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `Saml2SignRequest`<sup>Optional</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest"></a>

```csharp
public object Saml2SignRequest { get; set; }
```

- *Type:* object

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `Saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```csharp
public string Saml2SnowflakeAcsUrl { get; set; }
```

- *Type:* string

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `Saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```csharp
public string Saml2SnowflakeIssuerUrl { get; set; }
```

- *Type:* string

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `Saml2SnowflakeX509Cert`<sup>Optional</sup> <a name="Saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert"></a>

```csharp
public string Saml2SnowflakeX509Cert { get; set; }
```

- *Type:* string

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```csharp
public string Saml2SpInitiatedLoginPageLabel { get; set; }
```

- *Type:* string

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---



