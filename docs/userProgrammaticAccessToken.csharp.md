# `userProgrammaticAccessToken` Submodule <a name="`userProgrammaticAccessToken` Submodule" id="@cdktf/provider-snowflake.userProgrammaticAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserProgrammaticAccessToken <a name="UserProgrammaticAccessToken" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token snowflake_user_programmatic_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessToken(Construct Scope, string Id, UserProgrammaticAccessTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig">UserProgrammaticAccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig">UserProgrammaticAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDaysToExpiry">ResetDaysToExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetExpireRotatedTokenAfterHours">ResetExpireRotatedTokenAfterHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetKeeper">ResetKeeper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetMinsToBypassNetworkPolicyRequirement">ResetMinsToBypassNetworkPolicyRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetRoleRestriction">ResetRoleRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts"></a>

```csharp
private void PutTimeouts(UserProgrammaticAccessTokenTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDaysToExpiry` <a name="ResetDaysToExpiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDaysToExpiry"></a>

```csharp
private void ResetDaysToExpiry()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetExpireRotatedTokenAfterHours` <a name="ResetExpireRotatedTokenAfterHours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetExpireRotatedTokenAfterHours"></a>

```csharp
private void ResetExpireRotatedTokenAfterHours()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeeper` <a name="ResetKeeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetKeeper"></a>

```csharp
private void ResetKeeper()
```

##### `ResetMinsToBypassNetworkPolicyRequirement` <a name="ResetMinsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetMinsToBypassNetworkPolicyRequirement"></a>

```csharp
private void ResetMinsToBypassNetworkPolicyRequirement()
```

##### `ResetRoleRestriction` <a name="ResetRoleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetRoleRestriction"></a>

```csharp
private void ResetRoleRestriction()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

UserProgrammaticAccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

UserProgrammaticAccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

UserProgrammaticAccessToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

UserProgrammaticAccessToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserProgrammaticAccessToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserProgrammaticAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the UserProgrammaticAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.rotatedTokenName">RotatedTokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList">UserProgrammaticAccessTokenShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference">UserProgrammaticAccessTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiryInput">DaysToExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabledInput">DisabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHoursInput">ExpireRotatedTokenAfterHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeperInput">KeeperInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirementInput">MinsToBypassNetworkPolicyRequirementInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestrictionInput">RoleRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiry">DaysToExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabled">Disabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHours">ExpireRotatedTokenAfterHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeper">Keeper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirement">MinsToBypassNetworkPolicyRequirement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestriction">RoleRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RotatedTokenName`<sup>Required</sup> <a name="RotatedTokenName" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.rotatedTokenName"></a>

```csharp
public string RotatedTokenName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.showOutput"></a>

```csharp
public UserProgrammaticAccessTokenShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList">UserProgrammaticAccessTokenShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeouts"></a>

```csharp
public UserProgrammaticAccessTokenTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference">UserProgrammaticAccessTokenTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DaysToExpiryInput`<sup>Optional</sup> <a name="DaysToExpiryInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiryInput"></a>

```csharp
public double DaysToExpiryInput { get; }
```

- *Type:* double

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabledInput"></a>

```csharp
public string DisabledInput { get; }
```

- *Type:* string

---

##### `ExpireRotatedTokenAfterHoursInput`<sup>Optional</sup> <a name="ExpireRotatedTokenAfterHoursInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHoursInput"></a>

```csharp
public double ExpireRotatedTokenAfterHoursInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeeperInput`<sup>Optional</sup> <a name="KeeperInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeperInput"></a>

```csharp
public string KeeperInput { get; }
```

- *Type:* string

---

##### `MinsToBypassNetworkPolicyRequirementInput`<sup>Optional</sup> <a name="MinsToBypassNetworkPolicyRequirementInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirementInput"></a>

```csharp
public double MinsToBypassNetworkPolicyRequirementInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleRestrictionInput`<sup>Optional</sup> <a name="RoleRestrictionInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestrictionInput"></a>

```csharp
public string RoleRestrictionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DaysToExpiry`<sup>Required</sup> <a name="DaysToExpiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiry"></a>

```csharp
public double DaysToExpiry { get; }
```

- *Type:* double

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabled"></a>

```csharp
public string Disabled { get; }
```

- *Type:* string

---

##### `ExpireRotatedTokenAfterHours`<sup>Required</sup> <a name="ExpireRotatedTokenAfterHours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHours"></a>

```csharp
public double ExpireRotatedTokenAfterHours { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Keeper`<sup>Required</sup> <a name="Keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeper"></a>

```csharp
public string Keeper { get; }
```

- *Type:* string

---

##### `MinsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="MinsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirement"></a>

```csharp
public double MinsToBypassNetworkPolicyRequirement { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleRestriction`<sup>Required</sup> <a name="RoleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestriction"></a>

```csharp
public string RoleRestriction { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserProgrammaticAccessTokenConfig <a name="UserProgrammaticAccessTokenConfig" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string User,
    string Comment = null,
    double DaysToExpiry = null,
    string Disabled = null,
    double ExpireRotatedTokenAfterHours = null,
    string Id = null,
    string Keeper = null,
    double MinsToBypassNetworkPolicyRequirement = null,
    string RoleRestriction = null,
    UserProgrammaticAccessTokenTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name for the programmatic access token; |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.user">User</a></code> | <code>string</code> | The name of the user that the token is associated with. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.comment">Comment</a></code> | <code>string</code> | Descriptive comment about the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.daysToExpiry">DaysToExpiry</a></code> | <code>double</code> | The number of days that the programmatic access token can be used for authentication. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.disabled">Disabled</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.expireRotatedTokenAfterHours">ExpireRotatedTokenAfterHours</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.keeper">Keeper</a></code> | <code>string</code> | Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.minsToBypassNetworkPolicyRequirement">MinsToBypassNetworkPolicyRequirement</a></code> | <code>double</code> | The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.roleRestriction">RoleRestriction</a></code> | <code>string</code> | The name of the role used for privilege evaluation and object creation. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name for the programmatic access token;

must be unique for the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#name UserProgrammaticAccessToken#name}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The name of the user that the token is associated with.

A user cannot use another user's programmatic access token to authenticate. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#user UserProgrammaticAccessToken#user}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Descriptive comment about the programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#comment UserProgrammaticAccessToken#comment}

---

##### `DaysToExpiry`<sup>Optional</sup> <a name="DaysToExpiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.daysToExpiry"></a>

```csharp
public double DaysToExpiry { get; set; }
```

- *Type:* double

The number of days that the programmatic access token can be used for authentication.

This field cannot be altered after the token is created. Instead, you must rotate the token with the `keeper` field. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#days_to_expiry UserProgrammaticAccessToken#days_to_expiry}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.disabled"></a>

```csharp
public string Disabled { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#disabled UserProgrammaticAccessToken#disabled}

---

##### `ExpireRotatedTokenAfterHours`<sup>Optional</sup> <a name="ExpireRotatedTokenAfterHours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.expireRotatedTokenAfterHours"></a>

```csharp
public double ExpireRotatedTokenAfterHours { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field.

Sets the expiration time of the existing token secret to expire after the specified number of hours. You can set this to a value of 0 to expire the current token secret immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#expire_rotated_token_after_hours UserProgrammaticAccessToken#expire_rotated_token_after_hours}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Keeper`<sup>Optional</sup> <a name="Keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.keeper"></a>

```csharp
public string Keeper { get; set; }
```

- *Type:* string

Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated.

When you add this field to the configuration, or remove it from the configuration, the rotation is not triggered. When the token is rotated, the `token` and `rotated_token_name` fields are marked as computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#keeper UserProgrammaticAccessToken#keeper}

---

##### `MinsToBypassNetworkPolicyRequirement`<sup>Optional</sup> <a name="MinsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.minsToBypassNetworkPolicyRequirement"></a>

```csharp
public double MinsToBypassNetworkPolicyRequirement { get; set; }
```

- *Type:* double

The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#mins_to_bypass_network_policy_requirement UserProgrammaticAccessToken#mins_to_bypass_network_policy_requirement}

---

##### `RoleRestriction`<sup>Optional</sup> <a name="RoleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.roleRestriction"></a>

```csharp
public string RoleRestriction { get; set; }
```

- *Type:* string

The name of the role used for privilege evaluation and object creation.

This must be one of the roles that has already been granted to the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#role_restriction UserProgrammaticAccessToken#role_restriction}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.timeouts"></a>

```csharp
public UserProgrammaticAccessTokenTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#timeouts UserProgrammaticAccessToken#timeouts}

---

### UserProgrammaticAccessTokenShowOutput <a name="UserProgrammaticAccessTokenShowOutput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessTokenShowOutput {

};
```


### UserProgrammaticAccessTokenTimeouts <a name="UserProgrammaticAccessTokenTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessTokenTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserProgrammaticAccessTokenShowOutputList <a name="UserProgrammaticAccessTokenShowOutputList" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessTokenShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get"></a>

```csharp
private UserProgrammaticAccessTokenShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### UserProgrammaticAccessTokenShowOutputOutputReference <a name="UserProgrammaticAccessTokenShowOutputOutputReference" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessTokenShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement">MinsToBypassNetworkPolicyRequirement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.roleRestriction">RoleRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.rotatedTo">RotatedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput">UserProgrammaticAccessTokenShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `MinsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="MinsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement"></a>

```csharp
public double MinsToBypassNetworkPolicyRequirement { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleRestriction`<sup>Required</sup> <a name="RoleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.roleRestriction"></a>

```csharp
public string RoleRestriction { get; }
```

- *Type:* string

---

##### `RotatedTo`<sup>Required</sup> <a name="RotatedTo" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.rotatedTo"></a>

```csharp
public string RotatedTo { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.internalValue"></a>

```csharp
public UserProgrammaticAccessTokenShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput">UserProgrammaticAccessTokenShowOutput</a>

---


### UserProgrammaticAccessTokenTimeoutsOutputReference <a name="UserProgrammaticAccessTokenTimeoutsOutputReference" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new UserProgrammaticAccessTokenTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



