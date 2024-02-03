# `maskingPolicyGrant` Submodule <a name="`maskingPolicyGrant` Submodule" id="@cdktf/provider-snowflake.maskingPolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaskingPolicyGrant <a name="MaskingPolicyGrant" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant snowflake_masking_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicyGrant(Construct Scope, string Id, MaskingPolicyGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig">MaskingPolicyGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig">MaskingPolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRevertOwnershipToRoleName">ResetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetEnableMultipleGrants"></a>

```csharp
private void ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetPrivilege"></a>

```csharp
private void ResetPrivilege()
```

##### `ResetRevertOwnershipToRoleName` <a name="ResetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRevertOwnershipToRoleName"></a>

```csharp
private void ResetRevertOwnershipToRoleName()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaskingPolicyGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicyGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicyGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicyGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicyGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MaskingPolicyGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaskingPolicyGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaskingPolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MaskingPolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyNameInput">MaskingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleNameInput">RevertOwnershipToRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyName">MaskingPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrantsInput"></a>

```csharp
public object EnableMultipleGrantsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyNameInput`<sup>Optional</sup> <a name="MaskingPolicyNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyNameInput"></a>

```csharp
public string MaskingPolicyNameInput { get; }
```

- *Type:* string

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilegeInput"></a>

```csharp
public string PrivilegeInput { get; }
```

- *Type:* string

---

##### `RevertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="RevertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleNameInput"></a>

```csharp
public string RevertOwnershipToRoleNameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyName`<sup>Required</sup> <a name="MaskingPolicyName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyName"></a>

```csharp
public string MaskingPolicyName { get; }
```

- *Type:* string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `RevertOwnershipToRoleName`<sup>Required</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleName"></a>

```csharp
public string RevertOwnershipToRoleName { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaskingPolicyGrantConfig <a name="MaskingPolicyGrantConfig" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicyGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string MaskingPolicyName,
    string SchemaName,
    object EnableMultipleGrants = null,
    string Id = null,
    string Privilege = null,
    string RevertOwnershipToRoleName = null,
    string[] Roles = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.maskingPolicyName">MaskingPolicyName</a></code> | <code>string</code> | The name of the masking policy on which to grant privileges immediately. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.privilege">Privilege</a></code> | <code>string</code> | The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>string</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.roles">Roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#database_name MaskingPolicyGrant#database_name}

---

##### `MaskingPolicyName`<sup>Required</sup> <a name="MaskingPolicyName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.maskingPolicyName"></a>

```csharp
public string MaskingPolicyName { get; set; }
```

- *Type:* string

The name of the masking policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#masking_policy_name MaskingPolicyGrant#masking_policy_name}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#schema_name MaskingPolicyGrant#schema_name}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; set; }
```

- *Type:* object

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#enable_multiple_grants MaskingPolicyGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.privilege"></a>

```csharp
public string Privilege { get; set; }
```

- *Type:* string

The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#privilege MaskingPolicyGrant#privilege}

---

##### `RevertOwnershipToRoleName`<sup>Optional</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.revertOwnershipToRoleName"></a>

```csharp
public string RevertOwnershipToRoleName { get; set; }
```

- *Type:* string

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#revert_ownership_to_role_name MaskingPolicyGrant#revert_ownership_to_role_name}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#roles MaskingPolicyGrant#roles}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/masking_policy_grant#with_grant_option MaskingPolicyGrant#with_grant_option}

---



