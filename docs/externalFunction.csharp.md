# `externalFunction` Submodule <a name="`externalFunction` Submodule" id="@cdktf/provider-snowflake.externalFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalFunction <a name="ExternalFunction" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function snowflake_external_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunction(Construct Scope, string Id, ExternalFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig">ExternalFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig">ExternalFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg">PutArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg">ResetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders">ResetContextHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows">ResetMaxBatchRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior">ResetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator">ResetRequestTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator">ResetResponseTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed">ResetReturnNullAllowed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArg` <a name="PutArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg"></a>

```csharp
private void PutArg(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg.parameter.value"></a>

- *Type:* object

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetArg` <a name="ResetArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg"></a>

```csharp
private void ResetArg()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetContextHeaders` <a name="ResetContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders"></a>

```csharp
private void ResetContextHeaders()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxBatchRows` <a name="ResetMaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows"></a>

```csharp
private void ResetMaxBatchRows()
```

##### `ResetNullInputBehavior` <a name="ResetNullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior"></a>

```csharp
private void ResetNullInputBehavior()
```

##### `ResetRequestTranslator` <a name="ResetRequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator"></a>

```csharp
private void ResetRequestTranslator()
```

##### `ResetResponseTranslator` <a name="ResetResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator"></a>

```csharp
private void ResetResponseTranslator()
```

##### `ResetReturnNullAllowed` <a name="ResetReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed"></a>

```csharp
private void ResetReturnNullAllowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ExternalFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg">Arg</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header">Header</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput">ApiIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput">ArgInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput">ContextHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput">MaxBatchRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput">NullInputBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput">RequestTranslatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput">ResponseTranslatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput">ReturnBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput">ReturnNullAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput">ReturnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput">UrlOfProxyAndResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration">ApiIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders">ContextHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows">MaxBatchRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior">NullInputBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator">RequestTranslator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator">ResponseTranslator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior">ReturnBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed">ReturnNullAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource">UrlOfProxyAndResource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arg`<sup>Required</sup> <a name="Arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg"></a>

```csharp
public ExternalFunctionArgList Arg { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header"></a>

```csharp
public ExternalFunctionHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a>

---

##### `ApiIntegrationInput`<sup>Optional</sup> <a name="ApiIntegrationInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput"></a>

```csharp
public string ApiIntegrationInput { get; }
```

- *Type:* string

---

##### `ArgInput`<sup>Optional</sup> <a name="ArgInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput"></a>

```csharp
public object ArgInput { get; }
```

- *Type:* object

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `ContextHeadersInput`<sup>Optional</sup> <a name="ContextHeadersInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput"></a>

```csharp
public string[] ContextHeadersInput { get; }
```

- *Type:* string[]

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxBatchRowsInput`<sup>Optional</sup> <a name="MaxBatchRowsInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput"></a>

```csharp
public double MaxBatchRowsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullInputBehaviorInput`<sup>Optional</sup> <a name="NullInputBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput"></a>

```csharp
public string NullInputBehaviorInput { get; }
```

- *Type:* string

---

##### `RequestTranslatorInput`<sup>Optional</sup> <a name="RequestTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput"></a>

```csharp
public string RequestTranslatorInput { get; }
```

- *Type:* string

---

##### `ResponseTranslatorInput`<sup>Optional</sup> <a name="ResponseTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput"></a>

```csharp
public string ResponseTranslatorInput { get; }
```

- *Type:* string

---

##### `ReturnBehaviorInput`<sup>Optional</sup> <a name="ReturnBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput"></a>

```csharp
public string ReturnBehaviorInput { get; }
```

- *Type:* string

---

##### `ReturnNullAllowedInput`<sup>Optional</sup> <a name="ReturnNullAllowedInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput"></a>

```csharp
public object ReturnNullAllowedInput { get; }
```

- *Type:* object

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput"></a>

```csharp
public string ReturnTypeInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `UrlOfProxyAndResourceInput`<sup>Optional</sup> <a name="UrlOfProxyAndResourceInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput"></a>

```csharp
public string UrlOfProxyAndResourceInput { get; }
```

- *Type:* string

---

##### `ApiIntegration`<sup>Required</sup> <a name="ApiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration"></a>

```csharp
public string ApiIntegration { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `ContextHeaders`<sup>Required</sup> <a name="ContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders"></a>

```csharp
public string[] ContextHeaders { get; }
```

- *Type:* string[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxBatchRows`<sup>Required</sup> <a name="MaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows"></a>

```csharp
public double MaxBatchRows { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NullInputBehavior`<sup>Required</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior"></a>

```csharp
public string NullInputBehavior { get; }
```

- *Type:* string

---

##### `RequestTranslator`<sup>Required</sup> <a name="RequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator"></a>

```csharp
public string RequestTranslator { get; }
```

- *Type:* string

---

##### `ResponseTranslator`<sup>Required</sup> <a name="ResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator"></a>

```csharp
public string ResponseTranslator { get; }
```

- *Type:* string

---

##### `ReturnBehavior`<sup>Required</sup> <a name="ReturnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior"></a>

```csharp
public string ReturnBehavior { get; }
```

- *Type:* string

---

##### `ReturnNullAllowed`<sup>Required</sup> <a name="ReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed"></a>

```csharp
public object ReturnNullAllowed { get; }
```

- *Type:* object

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `UrlOfProxyAndResource`<sup>Required</sup> <a name="UrlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource"></a>

```csharp
public string UrlOfProxyAndResource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalFunctionArg <a name="ExternalFunctionArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionArg {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name">Name</a></code> | <code>string</code> | Argument name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type">Type</a></code> | <code>string</code> | Argument type, e.g. VARCHAR. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Argument type, e.g. VARCHAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#type ExternalFunction#type}

---

### ExternalFunctionConfig <a name="ExternalFunctionConfig" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiIntegration,
    string Database,
    string Name,
    string ReturnBehavior,
    string ReturnType,
    string Schema,
    string UrlOfProxyAndResource,
    object Arg = null,
    string Comment = null,
    string Compression = null,
    string[] ContextHeaders = null,
    object Header = null,
    string Id = null,
    double MaxBatchRows = null,
    string NullInputBehavior = null,
    string RequestTranslator = null,
    string ResponseTranslator = null,
    object ReturnNullAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration">ApiIntegration</a></code> | <code>string</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior">ReturnBehavior</a></code> | <code>string</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType">ReturnType</a></code> | <code>string</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource">UrlOfProxyAndResource</a></code> | <code>string</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg">Arg</a></code> | <code>object</code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment">Comment</a></code> | <code>string</code> | A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression">Compression</a></code> | <code>string</code> | If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders">ContextHeaders</a></code> | <code>string[]</code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows">MaxBatchRows</a></code> | <code>double</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior">NullInputBehavior</a></code> | <code>string</code> | Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator">RequestTranslator</a></code> | <code>string</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator">ResponseTranslator</a></code> | <code>string</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed">ReturnNullAllowed</a></code> | <code>object</code> | Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiIntegration`<sup>Required</sup> <a name="ApiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration"></a>

```csharp
public string ApiIntegration { get; set; }
```

- *Type:* string

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `ReturnBehavior`<sup>Required</sup> <a name="ReturnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior"></a>

```csharp
public string ReturnBehavior { get; set; }
```

- *Type:* string

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType"></a>

```csharp
public string ReturnType { get; set; }
```

- *Type:* string

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `UrlOfProxyAndResource`<sup>Required</sup> <a name="UrlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource"></a>

```csharp
public string UrlOfProxyAndResource { get; set; }
```

- *Type:* string

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `Arg`<sup>Optional</sup> <a name="Arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg"></a>

```csharp
public object Arg { get; set; }
```

- *Type:* object

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `ContextHeaders`<sup>Optional</sup> <a name="ContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders"></a>

```csharp
public string[] ContextHeaders { get; set; }
```

- *Type:* string[]

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxBatchRows`<sup>Optional</sup> <a name="MaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows"></a>

```csharp
public double MaxBatchRows { get; set; }
```

- *Type:* double

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `NullInputBehavior`<sup>Optional</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior"></a>

```csharp
public string NullInputBehavior { get; set; }
```

- *Type:* string

Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `RequestTranslator`<sup>Optional</sup> <a name="RequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator"></a>

```csharp
public string RequestTranslator { get; set; }
```

- *Type:* string

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `ResponseTranslator`<sup>Optional</sup> <a name="ResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator"></a>

```csharp
public string ResponseTranslator { get; set; }
```

- *Type:* string

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `ReturnNullAllowed`<sup>Optional</sup> <a name="ReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed"></a>

```csharp
public object ReturnNullAllowed { get; set; }
```

- *Type:* object

Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

### ExternalFunctionHeader <a name="ExternalFunctionHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name">Name</a></code> | <code>string</code> | Header name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value">Value</a></code> | <code>string</code> | Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_function#value ExternalFunction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalFunctionArgList <a name="ExternalFunctionArgList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionArgList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get"></a>

```csharp
private ExternalFunctionArgOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalFunctionArgOutputReference <a name="ExternalFunctionArgOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionArgOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalFunctionHeaderList <a name="ExternalFunctionHeaderList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get"></a>

```csharp
private ExternalFunctionHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalFunctionHeaderOutputReference <a name="ExternalFunctionHeaderOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalFunctionHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



