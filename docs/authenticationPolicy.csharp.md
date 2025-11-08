# `authenticationPolicy` Submodule <a name="`authenticationPolicy` Submodule" id="@cdktf/provider-snowflake.authenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationPolicy <a name="AuthenticationPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy snowflake_authentication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicy(Construct Scope, string Id, AuthenticationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy">PutMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy">PutPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy">PutWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods">ResetAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes">ResetClientTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods">ResetMfaAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment">ResetMfaEnrollment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy">ResetMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy">ResetPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations">ResetSecurityIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy">ResetWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMfaPolicy` <a name="PutMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy"></a>

```csharp
private void PutMfaPolicy(AuthenticationPolicyMfaPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `PutPatPolicy` <a name="PutPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy"></a>

```csharp
private void PutPatPolicy(AuthenticationPolicyPatPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(AuthenticationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `PutWorkloadIdentityPolicy` <a name="PutWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy"></a>

```csharp
private void PutWorkloadIdentityPolicy(AuthenticationPolicyWorkloadIdentityPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `ResetAuthenticationMethods` <a name="ResetAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods"></a>

```csharp
private void ResetAuthenticationMethods()
```

##### `ResetClientTypes` <a name="ResetClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes"></a>

```csharp
private void ResetClientTypes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMfaAuthenticationMethods` <a name="ResetMfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods"></a>

```csharp
private void ResetMfaAuthenticationMethods()
```

##### `ResetMfaEnrollment` <a name="ResetMfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment"></a>

```csharp
private void ResetMfaEnrollment()
```

##### `ResetMfaPolicy` <a name="ResetMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy"></a>

```csharp
private void ResetMfaPolicy()
```

##### `ResetPatPolicy` <a name="ResetPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy"></a>

```csharp
private void ResetPatPolicy()
```

##### `ResetSecurityIntegrations` <a name="ResetSecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations"></a>

```csharp
private void ResetSecurityIntegrations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkloadIdentityPolicy` <a name="ResetWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy"></a>

```csharp
private void ResetWorkloadIdentityPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

AuthenticationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

AuthenticationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

AuthenticationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

AuthenticationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy">MfaPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy">PatPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput">AuthenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput">ClientTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput">MfaAuthenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput">MfaEnrollmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput">MfaPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput">PatPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput">SecurityIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput">WorkloadIdentityPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes">ClientTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput"></a>

```csharp
public AuthenticationPolicyDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy"></a>

```csharp
public AuthenticationPolicyMfaPolicyOutputReference MfaPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a>

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy"></a>

```csharp
public AuthenticationPolicyPatPolicyOutputReference PatPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput"></a>

```csharp
public AuthenticationPolicyShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts"></a>

```csharp
public AuthenticationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a>

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicyOutputReference WorkloadIdentityPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a>

---

##### `AuthenticationMethodsInput`<sup>Optional</sup> <a name="AuthenticationMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput"></a>

```csharp
public string[] AuthenticationMethodsInput { get; }
```

- *Type:* string[]

---

##### `ClientTypesInput`<sup>Optional</sup> <a name="ClientTypesInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput"></a>

```csharp
public string[] ClientTypesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MfaAuthenticationMethodsInput`<sup>Optional</sup> <a name="MfaAuthenticationMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput"></a>

```csharp
public string[] MfaAuthenticationMethodsInput { get; }
```

- *Type:* string[]

---

##### `MfaEnrollmentInput`<sup>Optional</sup> <a name="MfaEnrollmentInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput"></a>

```csharp
public string MfaEnrollmentInput { get; }
```

- *Type:* string

---

##### `MfaPolicyInput`<sup>Optional</sup> <a name="MfaPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput"></a>

```csharp
public AuthenticationPolicyMfaPolicy MfaPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatPolicyInput`<sup>Optional</sup> <a name="PatPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput"></a>

```csharp
public AuthenticationPolicyPatPolicy PatPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SecurityIntegrationsInput`<sup>Optional</sup> <a name="SecurityIntegrationsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput"></a>

```csharp
public string[] SecurityIntegrationsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|AuthenticationPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `WorkloadIdentityPolicyInput`<sup>Optional</sup> <a name="WorkloadIdentityPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicy WorkloadIdentityPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods"></a>

```csharp
public string[] AuthenticationMethods { get; }
```

- *Type:* string[]

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes"></a>

```csharp
public string[] ClientTypes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MfaAuthenticationMethods`<sup>Required</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods"></a>

```csharp
public string[] MfaAuthenticationMethods { get; }
```

- *Type:* string[]

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations"></a>

```csharp
public string[] SecurityIntegrations { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationPolicyConfig <a name="AuthenticationPolicyConfig" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string Name,
    string Schema,
    string[] AuthenticationMethods = null,
    string[] ClientTypes = null,
    string Comment = null,
    string Id = null,
    string[] MfaAuthenticationMethods = null,
    string MfaEnrollment = null,
    AuthenticationPolicyMfaPolicy MfaPolicy = null,
    AuthenticationPolicyPatPolicy PatPolicy = null,
    string[] SecurityIntegrations = null,
    AuthenticationPolicyTimeouts Timeouts = null,
    AuthenticationPolicyWorkloadIdentityPolicy WorkloadIdentityPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string[]</code> | A list of authentication methods that are allowed during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes">ClientTypes</a></code> | <code>string[]</code> | A list of clients that can authenticate with Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#id AuthenticationPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>string[]</code> | A list of authentication methods that enforce multi-factor authentication (MFA) during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | Determines whether a user must enroll in multi-factor authentication. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy">MfaPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | mfa_policy block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy">PatPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | pat_policy block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string[]</code> | A list of security integrations the authentication policy is associated with. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | workload_identity_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#database AuthenticationPolicy#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#name AuthenticationPolicy#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}

---

##### `AuthenticationMethods`<sup>Optional</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods"></a>

```csharp
public string[] AuthenticationMethods { get; set; }
```

- *Type:* string[]

A list of authentication methods that are allowed during login.

Valid values are (case-insensitive): `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR` | `PROGRAMMATIC_ACCESS_TOKEN` | `WORKLOAD_IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}

---

##### `ClientTypes`<sup>Optional</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes"></a>

```csharp
public string[] ClientTypes { get; set; }
```

- *Type:* string[]

A list of clients that can authenticate with Snowflake.

If a client tries to connect, and the client is not one of the valid `client_types`, then the login attempt fails. Valid values are (case-insensitive): `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL` | `SNOWFLAKE_CLI`. The `client_types` property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#id AuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MfaAuthenticationMethods`<sup>Optional</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods"></a>

```csharp
public string[] MfaAuthenticationMethods { get; set; }
```

- *Type:* string[]

A list of authentication methods that enforce multi-factor authentication (MFA) during login.

Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}

---

##### `MfaEnrollment`<sup>Optional</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; set; }
```

- *Type:* string

Determines whether a user must enroll in multi-factor authentication.

Valid values are (case-insensitive): `REQUIRED` | `REQUIRED_PASSWORD_ONLY` | `OPTIONAL`. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the `client_types` parameter must include `snowflake_ui`, because Snowsight is the only place users can enroll in multi-factor authentication (MFA). Note that when you set this value to OPTIONAL, and your account setup forces users to enroll in MFA, then Snowflake may set quietly this value to `REQUIRED_PASSWORD_ONLY`, which may cause permadiff. In this case, you may want to adjust this field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}

---

##### `MfaPolicy`<sup>Optional</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy"></a>

```csharp
public AuthenticationPolicyMfaPolicy MfaPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

mfa_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#mfa_policy AuthenticationPolicy#mfa_policy}

---

##### `PatPolicy`<sup>Optional</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy"></a>

```csharp
public AuthenticationPolicyPatPolicy PatPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

pat_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#pat_policy AuthenticationPolicy#pat_policy}

---

##### `SecurityIntegrations`<sup>Optional</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations"></a>

```csharp
public string[] SecurityIntegrations { get; set; }
```

- *Type:* string[]

A list of security integrations the authentication policy is associated with.

This parameter has no effect when `saml` or `oauth` are not in the `authentication_methods` list. All values in the `security_integrations` list must be compatible with the values in the `authentication_methods` list. For example, if `security_integrations` contains a SAML security integration, and `authentication_methods` contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use `ALL` as parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts"></a>

```csharp
public AuthenticationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#timeouts AuthenticationPolicy#timeouts}

---

##### `WorkloadIdentityPolicy`<sup>Optional</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicy WorkloadIdentityPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

workload_identity_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#workload_identity_policy AuthenticationPolicy#workload_identity_policy}

---

### AuthenticationPolicyDescribeOutput <a name="AuthenticationPolicyDescribeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyDescribeOutput {

};
```


### AuthenticationPolicyMfaPolicy <a name="AuthenticationPolicyMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyMfaPolicy {
    string[] AllowedMethods = null,
    string EnforceMfaOnExternalAuthentication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Specifies the allowed methods for the MFA policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication">EnforceMfaOnExternalAuthentication</a></code> | <code>string</code> | Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` \| `NONE`. |

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Specifies the allowed methods for the MFA policy.

Valid values are: `ALL` | `PASSKEY` | `TOTP` | `DUO`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_methods AuthenticationPolicy#allowed_methods}

---

##### `EnforceMfaOnExternalAuthentication`<sup>Optional</sup> <a name="EnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication"></a>

```csharp
public string EnforceMfaOnExternalAuthentication { get; set; }
```

- *Type:* string

Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#enforce_mfa_on_external_authentication AuthenticationPolicy#enforce_mfa_on_external_authentication}

---

### AuthenticationPolicyPatPolicy <a name="AuthenticationPolicyPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyPatPolicy {
    double DefaultExpiryInDays = null,
    double MaxExpiryInDays = null,
    string NetworkPolicyEvaluation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays">DefaultExpiryInDays</a></code> | <code>double</code> | Specifies the default expiration time (in days) for a programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays">MaxExpiryInDays</a></code> | <code>double</code> | Specifies the maximum number of days that can be set for the expiration time for a programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation">NetworkPolicyEvaluation</a></code> | <code>string</code> | Specifies the network policy evaluation for the PAT. |

---

##### `DefaultExpiryInDays`<sup>Optional</sup> <a name="DefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays"></a>

```csharp
public double DefaultExpiryInDays { get; set; }
```

- *Type:* double

Specifies the default expiration time (in days) for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#default_expiry_in_days AuthenticationPolicy#default_expiry_in_days}

---

##### `MaxExpiryInDays`<sup>Optional</sup> <a name="MaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays"></a>

```csharp
public double MaxExpiryInDays { get; set; }
```

- *Type:* double

Specifies the maximum number of days that can be set for the expiration time for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#max_expiry_in_days AuthenticationPolicy#max_expiry_in_days}

---

##### `NetworkPolicyEvaluation`<sup>Optional</sup> <a name="NetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation"></a>

```csharp
public string NetworkPolicyEvaluation { get; set; }
```

- *Type:* string

Specifies the network policy evaluation for the PAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#network_policy_evaluation AuthenticationPolicy#network_policy_evaluation}

---

### AuthenticationPolicyShowOutput <a name="AuthenticationPolicyShowOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyShowOutput {

};
```


### AuthenticationPolicyTimeouts <a name="AuthenticationPolicyTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#create AuthenticationPolicy#create}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#read AuthenticationPolicy#read}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#update AuthenticationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#create AuthenticationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#read AuthenticationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#update AuthenticationPolicy#update}.

---

### AuthenticationPolicyWorkloadIdentityPolicy <a name="AuthenticationPolicyWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyWorkloadIdentityPolicy {
    string[] AllowedAwsAccounts = null,
    string[] AllowedAzureIssuers = null,
    string[] AllowedOidcIssuers = null,
    string[] AllowedProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts">AllowedAwsAccounts</a></code> | <code>string[]</code> | Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers">AllowedAzureIssuers</a></code> | <code>string[]</code> | Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers">AllowedOidcIssuers</a></code> | <code>string[]</code> | Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders">AllowedProviders</a></code> | <code>string[]</code> | Specifies the allowed providers for the workload identity policy. |

---

##### `AllowedAwsAccounts`<sup>Optional</sup> <a name="AllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts"></a>

```csharp
public string[] AllowedAwsAccounts { get; set; }
```

- *Type:* string[]

Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_aws_accounts AuthenticationPolicy#allowed_aws_accounts}

---

##### `AllowedAzureIssuers`<sup>Optional</sup> <a name="AllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers"></a>

```csharp
public string[] AllowedAzureIssuers { get; set; }
```

- *Type:* string[]

Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_azure_issuers AuthenticationPolicy#allowed_azure_issuers}

---

##### `AllowedOidcIssuers`<sup>Optional</sup> <a name="AllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers"></a>

```csharp
public string[] AllowedOidcIssuers { get; set; }
```

- *Type:* string[]

Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_oidc_issuers AuthenticationPolicy#allowed_oidc_issuers}

---

##### `AllowedProviders`<sup>Optional</sup> <a name="AllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders"></a>

```csharp
public string[] AllowedProviders { get; set; }
```

- *Type:* string[]

Specifies the allowed providers for the workload identity policy.

Valid values are: `ALL` | `AWS` | `AZURE` | `GCP` | `OIDC`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_providers AuthenticationPolicy#allowed_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationPolicyDescribeOutputList <a name="AuthenticationPolicyDescribeOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get"></a>

```csharp
private AuthenticationPolicyDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AuthenticationPolicyDescribeOutputOutputReference <a name="AuthenticationPolicyDescribeOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes">ClientTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy">MfaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy">PatPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods"></a>

```csharp
public string AuthenticationMethods { get; }
```

- *Type:* string

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes"></a>

```csharp
public string ClientTypes { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `MfaAuthenticationMethods`<sup>Required</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods"></a>

```csharp
public string MfaAuthenticationMethods { get; }
```

- *Type:* string

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; }
```

- *Type:* string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy"></a>

```csharp
public string MfaPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy"></a>

```csharp
public string PatPolicy { get; }
```

- *Type:* string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations"></a>

```csharp
public string SecurityIntegrations { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy"></a>

```csharp
public string WorkloadIdentityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a>

---


### AuthenticationPolicyMfaPolicyOutputReference <a name="AuthenticationPolicyMfaPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyMfaPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication">ResetEnforceMfaOnExternalAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods"></a>

```csharp
private void ResetAllowedMethods()
```

##### `ResetEnforceMfaOnExternalAuthentication` <a name="ResetEnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication"></a>

```csharp
private void ResetEnforceMfaOnExternalAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput">EnforceMfaOnExternalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication">EnforceMfaOnExternalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `EnforceMfaOnExternalAuthenticationInput`<sup>Optional</sup> <a name="EnforceMfaOnExternalAuthenticationInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput"></a>

```csharp
public string EnforceMfaOnExternalAuthenticationInput { get; }
```

- *Type:* string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `EnforceMfaOnExternalAuthentication`<sup>Required</sup> <a name="EnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication"></a>

```csharp
public string EnforceMfaOnExternalAuthentication { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyMfaPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---


### AuthenticationPolicyPatPolicyOutputReference <a name="AuthenticationPolicyPatPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyPatPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays">ResetDefaultExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays">ResetMaxExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation">ResetNetworkPolicyEvaluation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultExpiryInDays` <a name="ResetDefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays"></a>

```csharp
private void ResetDefaultExpiryInDays()
```

##### `ResetMaxExpiryInDays` <a name="ResetMaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays"></a>

```csharp
private void ResetMaxExpiryInDays()
```

##### `ResetNetworkPolicyEvaluation` <a name="ResetNetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation"></a>

```csharp
private void ResetNetworkPolicyEvaluation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput">DefaultExpiryInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput">MaxExpiryInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput">NetworkPolicyEvaluationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays">DefaultExpiryInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays">MaxExpiryInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation">NetworkPolicyEvaluation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultExpiryInDaysInput`<sup>Optional</sup> <a name="DefaultExpiryInDaysInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput"></a>

```csharp
public double DefaultExpiryInDaysInput { get; }
```

- *Type:* double

---

##### `MaxExpiryInDaysInput`<sup>Optional</sup> <a name="MaxExpiryInDaysInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput"></a>

```csharp
public double MaxExpiryInDaysInput { get; }
```

- *Type:* double

---

##### `NetworkPolicyEvaluationInput`<sup>Optional</sup> <a name="NetworkPolicyEvaluationInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput"></a>

```csharp
public string NetworkPolicyEvaluationInput { get; }
```

- *Type:* string

---

##### `DefaultExpiryInDays`<sup>Required</sup> <a name="DefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays"></a>

```csharp
public double DefaultExpiryInDays { get; }
```

- *Type:* double

---

##### `MaxExpiryInDays`<sup>Required</sup> <a name="MaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays"></a>

```csharp
public double MaxExpiryInDays { get; }
```

- *Type:* double

---

##### `NetworkPolicyEvaluation`<sup>Required</sup> <a name="NetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation"></a>

```csharp
public string NetworkPolicyEvaluation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyPatPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---


### AuthenticationPolicyShowOutputList <a name="AuthenticationPolicyShowOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get"></a>

```csharp
private AuthenticationPolicyShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AuthenticationPolicyShowOutputOutputReference <a name="AuthenticationPolicyShowOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a>

---


### AuthenticationPolicyTimeoutsOutputReference <a name="AuthenticationPolicyTimeoutsOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuthenticationPolicyTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---


### AuthenticationPolicyWorkloadIdentityPolicyOutputReference <a name="AuthenticationPolicyWorkloadIdentityPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new AuthenticationPolicyWorkloadIdentityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts">ResetAllowedAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers">ResetAllowedAzureIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers">ResetAllowedOidcIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders">ResetAllowedProviders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAwsAccounts` <a name="ResetAllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts"></a>

```csharp
private void ResetAllowedAwsAccounts()
```

##### `ResetAllowedAzureIssuers` <a name="ResetAllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers"></a>

```csharp
private void ResetAllowedAzureIssuers()
```

##### `ResetAllowedOidcIssuers` <a name="ResetAllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers"></a>

```csharp
private void ResetAllowedOidcIssuers()
```

##### `ResetAllowedProviders` <a name="ResetAllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders"></a>

```csharp
private void ResetAllowedProviders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput">AllowedAwsAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput">AllowedAzureIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput">AllowedOidcIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput">AllowedProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts">AllowedAwsAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers">AllowedAzureIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers">AllowedOidcIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders">AllowedProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAwsAccountsInput`<sup>Optional</sup> <a name="AllowedAwsAccountsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput"></a>

```csharp
public string[] AllowedAwsAccountsInput { get; }
```

- *Type:* string[]

---

##### `AllowedAzureIssuersInput`<sup>Optional</sup> <a name="AllowedAzureIssuersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput"></a>

```csharp
public string[] AllowedAzureIssuersInput { get; }
```

- *Type:* string[]

---

##### `AllowedOidcIssuersInput`<sup>Optional</sup> <a name="AllowedOidcIssuersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput"></a>

```csharp
public string[] AllowedOidcIssuersInput { get; }
```

- *Type:* string[]

---

##### `AllowedProvidersInput`<sup>Optional</sup> <a name="AllowedProvidersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput"></a>

```csharp
public string[] AllowedProvidersInput { get; }
```

- *Type:* string[]

---

##### `AllowedAwsAccounts`<sup>Required</sup> <a name="AllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts"></a>

```csharp
public string[] AllowedAwsAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedAzureIssuers`<sup>Required</sup> <a name="AllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers"></a>

```csharp
public string[] AllowedAzureIssuers { get; }
```

- *Type:* string[]

---

##### `AllowedOidcIssuers`<sup>Required</sup> <a name="AllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers"></a>

```csharp
public string[] AllowedOidcIssuers { get; }
```

- *Type:* string[]

---

##### `AllowedProviders`<sup>Required</sup> <a name="AllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders"></a>

```csharp
public string[] AllowedProviders { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---



