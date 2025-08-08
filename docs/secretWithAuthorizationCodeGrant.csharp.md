# `secretWithAuthorizationCodeGrant` Submodule <a name="`secretWithAuthorizationCodeGrant` Submodule" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithAuthorizationCodeGrant <a name="SecretWithAuthorizationCodeGrant" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant snowflake_secret_with_authorization_code_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrant(Construct Scope, string Id, SecretWithAuthorizationCodeGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig">SecretWithAuthorizationCodeGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig">SecretWithAuthorizationCodeGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts"></a>

```csharp
private void PutTimeouts(SecretWithAuthorizationCodeGrantTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithAuthorizationCodeGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithAuthorizationCodeGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithAuthorizationCodeGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithAuthorizationCodeGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretWithAuthorizationCodeGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretWithAuthorizationCodeGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithAuthorizationCodeGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference">SecretWithAuthorizationCodeGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput">OauthRefreshTokenExpiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput">OauthRefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication">ApiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput"></a>

```csharp
public SecretWithAuthorizationCodeGrantDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput"></a>

```csharp
public SecretWithAuthorizationCodeGrantShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeouts"></a>

```csharp
public SecretWithAuthorizationCodeGrantTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference">SecretWithAuthorizationCodeGrantTimeoutsOutputReference</a>

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput"></a>

```csharp
public string ApiAuthenticationInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenExpiryTimeInput`<sup>Optional</sup> <a name="OauthRefreshTokenExpiryTimeInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput"></a>

```csharp
public string OauthRefreshTokenExpiryTimeInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenInput`<sup>Optional</sup> <a name="OauthRefreshTokenInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput"></a>

```csharp
public string OauthRefreshTokenInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication"></a>

```csharp
public string ApiAuthentication { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthRefreshToken`<sup>Required</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken"></a>

```csharp
public string OauthRefreshToken { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime"></a>

```csharp
public string OauthRefreshTokenExpiryTime { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithAuthorizationCodeGrantConfig <a name="SecretWithAuthorizationCodeGrantConfig" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiAuthentication,
    string Database,
    string Name,
    string OauthRefreshToken,
    string OauthRefreshTokenExpiryTime,
    string Schema,
    string Comment = null,
    string Id = null,
    SecretWithAuthorizationCodeGrantTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication">ApiAuthentication</a></code> | <code>string</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name">Name</a></code> | <code>string</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>string</code> | Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>string</code> | Specifies the timestamp as a string when the OAuth refresh token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication"></a>

```csharp
public string ApiAuthentication { get; set; }
```

- *Type:* string

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_authorization_code_grant).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#api_authentication SecretWithAuthorizationCodeGrant#api_authentication}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#database SecretWithAuthorizationCodeGrant#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#name SecretWithAuthorizationCodeGrant#name}

---

##### `OauthRefreshToken`<sup>Required</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken"></a>

```csharp
public string OauthRefreshToken { get; set; }
```

- *Type:* string

Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token SecretWithAuthorizationCodeGrant#oauth_refresh_token}

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime"></a>

```csharp
public string OauthRefreshTokenExpiryTime { get; set; }
```

- *Type:* string

Specifies the timestamp as a string when the OAuth refresh token expires.

Accepted string formats: YYYY-MM-DD, YYYY-MM-DD HH:MI, YYYY-MM-DD HH:MI:SS, YYYY-MM-DD HH:MI <timezone>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token_expiry_time SecretWithAuthorizationCodeGrant#oauth_refresh_token_expiry_time}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#schema SecretWithAuthorizationCodeGrant#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#comment SecretWithAuthorizationCodeGrant#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.timeouts"></a>

```csharp
public SecretWithAuthorizationCodeGrantTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#timeouts SecretWithAuthorizationCodeGrant#timeouts}

---

### SecretWithAuthorizationCodeGrantDescribeOutput <a name="SecretWithAuthorizationCodeGrantDescribeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantDescribeOutput {

};
```


### SecretWithAuthorizationCodeGrantShowOutput <a name="SecretWithAuthorizationCodeGrantShowOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantShowOutput {

};
```


### SecretWithAuthorizationCodeGrantTimeouts <a name="SecretWithAuthorizationCodeGrantTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretWithAuthorizationCodeGrantDescribeOutputList <a name="SecretWithAuthorizationCodeGrantDescribeOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get"></a>

```csharp
private SecretWithAuthorizationCodeGrantDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretWithAuthorizationCodeGrantDescribeOutputOutputReference <a name="SecretWithAuthorizationCodeGrantDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName">IntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">OauthAccessTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName"></a>

```csharp
public string IntegrationName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthAccessTokenExpiryTime`<sup>Required</sup> <a name="OauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```csharp
public string OauthAccessTokenExpiryTime { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```csharp
public string OauthRefreshTokenExpiryTime { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public SecretWithAuthorizationCodeGrantDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a>

---


### SecretWithAuthorizationCodeGrantShowOutputList <a name="SecretWithAuthorizationCodeGrantShowOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get"></a>

```csharp
private SecretWithAuthorizationCodeGrantShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretWithAuthorizationCodeGrantShowOutputOutputReference <a name="SecretWithAuthorizationCodeGrantShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue"></a>

```csharp
public SecretWithAuthorizationCodeGrantShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a>

---


### SecretWithAuthorizationCodeGrantTimeoutsOutputReference <a name="SecretWithAuthorizationCodeGrantTimeoutsOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithAuthorizationCodeGrantTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



