# `maskingPolicy` Submodule <a name="`maskingPolicy` Submodule" id="@cdktf/provider-snowflake.maskingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaskingPolicy <a name="MaskingPolicy" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy snowflake_masking_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicy(Construct Scope, string Id, MaskingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig">MaskingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig">MaskingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.putSignature">PutSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetExemptOtherPolicies">ResetExemptOtherPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOrReplace">ResetOrReplace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSignature` <a name="PutSignature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.putSignature"></a>

```csharp
private void PutSignature(MaskingPolicySignature Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.putSignature.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetExemptOtherPolicies` <a name="ResetExemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetExemptOtherPolicies"></a>

```csharp
private void ResetExemptOtherPolicies()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetIfNotExists"></a>

```csharp
private void ResetIfNotExists()
```

##### `ResetOrReplace` <a name="ResetOrReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOrReplace"></a>

```csharp
private void ResetOrReplace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaskingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaskingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MaskingPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaskingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaskingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MaskingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.qualifiedName">QualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signature">Signature</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference">MaskingPolicySignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPoliciesInput">ExemptOtherPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpressionInput">MaskingExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplaceInput">OrReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataTypeInput">ReturnDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signatureInput">SignatureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPolicies">ExemptOtherPolicies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExists">IfNotExists</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpression">MaskingExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplace">OrReplace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataType">ReturnDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `QualifiedName`<sup>Required</sup> <a name="QualifiedName" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.qualifiedName"></a>

```csharp
public string QualifiedName { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signature"></a>

```csharp
public MaskingPolicySignatureOutputReference Signature { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference">MaskingPolicySignatureOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `ExemptOtherPoliciesInput`<sup>Optional</sup> <a name="ExemptOtherPoliciesInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPoliciesInput"></a>

```csharp
public object ExemptOtherPoliciesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExistsInput"></a>

```csharp
public object IfNotExistsInput { get; }
```

- *Type:* object

---

##### `MaskingExpressionInput`<sup>Optional</sup> <a name="MaskingExpressionInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpressionInput"></a>

```csharp
public string MaskingExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrReplaceInput`<sup>Optional</sup> <a name="OrReplaceInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplaceInput"></a>

```csharp
public object OrReplaceInput { get; }
```

- *Type:* object

---

##### `ReturnDataTypeInput`<sup>Optional</sup> <a name="ReturnDataTypeInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataTypeInput"></a>

```csharp
public string ReturnDataTypeInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signatureInput"></a>

```csharp
public MaskingPolicySignature SignatureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `ExemptOtherPolicies`<sup>Required</sup> <a name="ExemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPolicies"></a>

```csharp
public object ExemptOtherPolicies { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExists"></a>

```csharp
public object IfNotExists { get; }
```

- *Type:* object

---

##### `MaskingExpression`<sup>Required</sup> <a name="MaskingExpression" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpression"></a>

```csharp
public string MaskingExpression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrReplace`<sup>Required</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplace"></a>

```csharp
public object OrReplace { get; }
```

- *Type:* object

---

##### `ReturnDataType`<sup>Required</sup> <a name="ReturnDataType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataType"></a>

```csharp
public string ReturnDataType { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaskingPolicyConfig <a name="MaskingPolicyConfig" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string MaskingExpression,
    string Name,
    string ReturnDataType,
    string Schema,
    MaskingPolicySignature Signature,
    string Comment = null,
    object ExemptOtherPolicies = null,
    string Id = null,
    object IfNotExists = null,
    object OrReplace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.maskingExpression">MaskingExpression</a></code> | <code>string</code> | Specifies the SQL expression that transforms the data. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the masking policy; |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.returnDataType">ReturnDataType</a></code> | <code>string</code> | Specifies the data type to return. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.signature">Signature</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | signature block. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.exemptOtherPolicies">ExemptOtherPolicies</a></code> | <code>object</code> | Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#id MaskingPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.ifNotExists">IfNotExists</a></code> | <code>object</code> | Prevent overwriting a previous masking policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.orReplace">OrReplace</a></code> | <code>object</code> | Whether to override a previous masking policy with the same name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#database MaskingPolicy#database}

---

##### `MaskingExpression`<sup>Required</sup> <a name="MaskingExpression" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.maskingExpression"></a>

```csharp
public string MaskingExpression { get; set; }
```

- *Type:* string

Specifies the SQL expression that transforms the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#masking_expression MaskingPolicy#masking_expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the masking policy;

must be unique for the database and schema in which the masking policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#name MaskingPolicy#name}

---

##### `ReturnDataType`<sup>Required</sup> <a name="ReturnDataType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.returnDataType"></a>

```csharp
public string ReturnDataType { get; set; }
```

- *Type:* string

Specifies the data type to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#return_data_type MaskingPolicy#return_data_type}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#schema MaskingPolicy#schema}

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.signature"></a>

```csharp
public MaskingPolicySignature Signature { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

signature block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#signature MaskingPolicy#signature}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#comment MaskingPolicy#comment}

---

##### `ExemptOtherPolicies`<sup>Optional</sup> <a name="ExemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.exemptOtherPolicies"></a>

```csharp
public object ExemptOtherPolicies { get; set; }
```

- *Type:* object

Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#exempt_other_policies MaskingPolicy#exempt_other_policies}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#id MaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.ifNotExists"></a>

```csharp
public object IfNotExists { get; set; }
```

- *Type:* object

Prevent overwriting a previous masking policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#if_not_exists MaskingPolicy#if_not_exists}

---

##### `OrReplace`<sup>Optional</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.orReplace"></a>

```csharp
public object OrReplace { get; set; }
```

- *Type:* object

Whether to override a previous masking policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#or_replace MaskingPolicy#or_replace}

---

### MaskingPolicySignature <a name="MaskingPolicySignature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicySignature {
    object Column
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature.property.column">Column</a></code> | <code>object</code> | column block. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature.property.column"></a>

```csharp
public object Column { get; set; }
```

- *Type:* object

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#column MaskingPolicy#column}

---

### MaskingPolicySignatureColumn <a name="MaskingPolicySignatureColumn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicySignatureColumn {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.name">Name</a></code> | <code>string</code> | Specifies the column name to mask. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.type">Type</a></code> | <code>string</code> | Specifies the column type to mask. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the column name to mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#name MaskingPolicy#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the column type to mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/masking_policy#type MaskingPolicy#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MaskingPolicySignatureColumnList <a name="MaskingPolicySignatureColumnList" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicySignatureColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.get"></a>

```csharp
private MaskingPolicySignatureColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MaskingPolicySignatureColumnOutputReference <a name="MaskingPolicySignatureColumnOutputReference" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicySignatureColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MaskingPolicySignatureOutputReference <a name="MaskingPolicySignatureOutputReference" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaskingPolicySignatureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.putColumn">PutColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.putColumn"></a>

```csharp
private void PutColumn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.putColumn.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList">MaskingPolicySignatureColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.columnInput">ColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.column"></a>

```csharp
public MaskingPolicySignatureColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList">MaskingPolicySignatureColumnList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.columnInput"></a>

```csharp
public object ColumnInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.internalValue"></a>

```csharp
public MaskingPolicySignature InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

---



