# `streamOnView` Submodule <a name="`streamOnView` Submodule" id="@cdktf/provider-snowflake.streamOnView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamOnView <a name="StreamOnView" id="@cdktf/provider-snowflake.streamOnView.StreamOnView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view snowflake_stream_on_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnView(Construct Scope, string Id, StreamOnViewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig">StreamOnViewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig">StreamOnViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt">PutAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore">PutBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAppendOnly">ResetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAt">ResetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetBefore">ResetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetCopyGrants">ResetCopyGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetShowInitialRows">ResetShowInitialRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAt` <a name="PutAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt"></a>

```csharp
private void PutAt(StreamOnViewAt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---

##### `PutBefore` <a name="PutBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore"></a>

```csharp
private void PutBefore(StreamOnViewBefore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamOnViewTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a>

---

##### `ResetAppendOnly` <a name="ResetAppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAppendOnly"></a>

```csharp
private void ResetAppendOnly()
```

##### `ResetAt` <a name="ResetAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAt"></a>

```csharp
private void ResetAt()
```

##### `ResetBefore` <a name="ResetBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetBefore"></a>

```csharp
private void ResetBefore()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCopyGrants` <a name="ResetCopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetCopyGrants"></a>

```csharp
private void ResetCopyGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShowInitialRows` <a name="ResetShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetShowInitialRows"></a>

```csharp
private void ResetShowInitialRows()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamOnView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StreamOnView.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StreamOnView.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StreamOnView.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StreamOnView.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamOnView resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamOnView to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamOnView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamOnView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.at">At</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference">StreamOnViewAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.before">Before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference">StreamOnViewBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList">StreamOnViewDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList">StreamOnViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.stale">Stale</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.streamType">StreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference">StreamOnViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnlyInput">AppendOnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.atInput">AtInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.beforeInput">BeforeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrantsInput">CopyGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRowsInput">ShowInitialRowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.viewInput">ViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnly">AppendOnly</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrants">CopyGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRows">ShowInitialRows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.view">View</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `At`<sup>Required</sup> <a name="At" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.at"></a>

```csharp
public StreamOnViewAtOutputReference At { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference">StreamOnViewAtOutputReference</a>

---

##### `Before`<sup>Required</sup> <a name="Before" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.before"></a>

```csharp
public StreamOnViewBeforeOutputReference Before { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference">StreamOnViewBeforeOutputReference</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.describeOutput"></a>

```csharp
public StreamOnViewDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList">StreamOnViewDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showOutput"></a>

```csharp
public StreamOnViewShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList">StreamOnViewShowOutputList</a>

---

##### `Stale`<sup>Required</sup> <a name="Stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.stale"></a>

```csharp
public IResolvable Stale { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StreamType`<sup>Required</sup> <a name="StreamType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.streamType"></a>

```csharp
public string StreamType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeouts"></a>

```csharp
public StreamOnViewTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference">StreamOnViewTimeoutsOutputReference</a>

---

##### `AppendOnlyInput`<sup>Optional</sup> <a name="AppendOnlyInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnlyInput"></a>

```csharp
public string AppendOnlyInput { get; }
```

- *Type:* string

---

##### `AtInput`<sup>Optional</sup> <a name="AtInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.atInput"></a>

```csharp
public StreamOnViewAt AtInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---

##### `BeforeInput`<sup>Optional</sup> <a name="BeforeInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.beforeInput"></a>

```csharp
public StreamOnViewBefore BeforeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CopyGrantsInput`<sup>Optional</sup> <a name="CopyGrantsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrantsInput"></a>

```csharp
public object CopyGrantsInput { get; }
```

- *Type:* object

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `ShowInitialRowsInput`<sup>Optional</sup> <a name="ShowInitialRowsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRowsInput"></a>

```csharp
public string ShowInitialRowsInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.viewInput"></a>

```csharp
public string ViewInput { get; }
```

- *Type:* string

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnly"></a>

```csharp
public string AppendOnly { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CopyGrants`<sup>Required</sup> <a name="CopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrants"></a>

```csharp
public object CopyGrants { get; }
```

- *Type:* object

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `ShowInitialRows`<sup>Required</sup> <a name="ShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRows"></a>

```csharp
public string ShowInitialRows { get; }
```

- *Type:* string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.view"></a>

```csharp
public string View { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamOnViewAt <a name="StreamOnViewAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewAt {
    string Offset = null,
    string Statement = null,
    string Stream = null,
    string Timestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.offset">Offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.statement">Statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.stream">Stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.timestamp">Timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.offset"></a>

```csharp
public string Offset { get; set; }
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#offset StreamOnView#offset}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.statement"></a>

```csharp
public string Statement { get; set; }
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#statement StreamOnView#statement}

---

##### `Stream`<sup>Optional</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.stream"></a>

```csharp
public string Stream { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#stream StreamOnView#stream}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#timestamp StreamOnView#timestamp}

---

### StreamOnViewBefore <a name="StreamOnViewBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewBefore {
    string Offset = null,
    string Statement = null,
    string Stream = null,
    string Timestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.offset">Offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.statement">Statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.stream">Stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.timestamp">Timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.offset"></a>

```csharp
public string Offset { get; set; }
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#offset StreamOnView#offset}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.statement"></a>

```csharp
public string Statement { get; set; }
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#statement StreamOnView#statement}

---

##### `Stream`<sup>Optional</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.stream"></a>

```csharp
public string Stream { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#stream StreamOnView#stream}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#timestamp StreamOnView#timestamp}

---

### StreamOnViewConfig <a name="StreamOnViewConfig" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Name,
    string Schema,
    string View,
    string AppendOnly = null,
    StreamOnViewAt At = null,
    StreamOnViewBefore Before = null,
    string Comment = null,
    object CopyGrants = null,
    string Id = null,
    string ShowInitialRows = null,
    StreamOnViewTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.view">View</a></code> | <code>string</code> | Specifies an identifier for the view the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.appendOnly">AppendOnly</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an append-only stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.at">At</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | at block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.before">Before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | before block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.copyGrants">CopyGrants</a></code> | <code>object</code> | (Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#id StreamOnView#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.showInitialRows">ShowInitialRows</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#database StreamOnView#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#name StreamOnView#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#schema StreamOnView#schema}

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.view"></a>

```csharp
public string View { get; set; }
```

- *Type:* string

Specifies an identifier for the view the stream will monitor.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./view).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#view StreamOnView#view}

---

##### `AppendOnly`<sup>Optional</sup> <a name="AppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.appendOnly"></a>

```csharp
public string AppendOnly { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an append-only stream.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#append_only StreamOnView#append_only}

---

##### `At`<sup>Optional</sup> <a name="At" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.at"></a>

```csharp
public StreamOnViewAt At { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#at StreamOnView#at}

---

##### `Before`<sup>Optional</sup> <a name="Before" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.before"></a>

```csharp
public StreamOnViewBefore Before { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

before block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#before StreamOnView#before}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#comment StreamOnView#comment}

---

##### `CopyGrants`<sup>Optional</sup> <a name="CopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.copyGrants"></a>

```csharp
public object CopyGrants { get; set; }
```

- *Type:* object

(Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause.

This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#copy_grants StreamOnView#copy_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#id StreamOnView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShowInitialRows`<sup>Optional</sup> <a name="ShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.showInitialRows"></a>

```csharp
public string ShowInitialRows { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#show_initial_rows StreamOnView#show_initial_rows}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.timeouts"></a>

```csharp
public StreamOnViewTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#timeouts StreamOnView#timeouts}

---

### StreamOnViewDescribeOutput <a name="StreamOnViewDescribeOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewDescribeOutput {

};
```


### StreamOnViewShowOutput <a name="StreamOnViewShowOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewShowOutput {

};
```


### StreamOnViewTimeouts <a name="StreamOnViewTimeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#create StreamOnView#create}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#delete StreamOnView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#read StreamOnView#read}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#update StreamOnView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#create StreamOnView#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#delete StreamOnView#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#read StreamOnView#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/stream_on_view#update StreamOnView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamOnViewAtOutputReference <a name="StreamOnViewAtOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewAtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStream">ResetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStatement"></a>

```csharp
private void ResetStatement()
```

##### `ResetStream` <a name="ResetStream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStream"></a>

```csharp
private void ResetStream()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetTimestamp"></a>

```csharp
private void ResetTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offsetInput">OffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statementInput">StatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.streamInput">StreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offset">Offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statement">Statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.stream">Stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offsetInput"></a>

```csharp
public string OffsetInput { get; }
```

- *Type:* string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statementInput"></a>

```csharp
public string StatementInput { get; }
```

- *Type:* string

---

##### `StreamInput`<sup>Optional</sup> <a name="StreamInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.streamInput"></a>

```csharp
public string StreamInput { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offset"></a>

```csharp
public string Offset { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statement"></a>

```csharp
public string Statement { get; }
```

- *Type:* string

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.stream"></a>

```csharp
public string Stream { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.internalValue"></a>

```csharp
public StreamOnViewAt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---


### StreamOnViewBeforeOutputReference <a name="StreamOnViewBeforeOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewBeforeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStream">ResetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStatement"></a>

```csharp
private void ResetStatement()
```

##### `ResetStream` <a name="ResetStream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStream"></a>

```csharp
private void ResetStream()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetTimestamp"></a>

```csharp
private void ResetTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offsetInput">OffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statementInput">StatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.streamInput">StreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offset">Offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statement">Statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.stream">Stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offsetInput"></a>

```csharp
public string OffsetInput { get; }
```

- *Type:* string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statementInput"></a>

```csharp
public string StatementInput { get; }
```

- *Type:* string

---

##### `StreamInput`<sup>Optional</sup> <a name="StreamInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.streamInput"></a>

```csharp
public string StreamInput { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offset"></a>

```csharp
public string Offset { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statement"></a>

```csharp
public string Statement { get; }
```

- *Type:* string

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.stream"></a>

```csharp
public string Stream { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.internalValue"></a>

```csharp
public StreamOnViewBefore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---


### StreamOnViewDescribeOutputList <a name="StreamOnViewDescribeOutputList" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get"></a>

```csharp
private StreamOnViewDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StreamOnViewDescribeOutputOutputReference <a name="StreamOnViewDescribeOutputOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.baseTables">BaseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.invalidReason">InvalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.stale">Stale</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.staleAfter">StaleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput">StreamOnViewDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseTables`<sup>Required</sup> <a name="BaseTables" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.baseTables"></a>

```csharp
public string[] BaseTables { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InvalidReason`<sup>Required</sup> <a name="InvalidReason" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.invalidReason"></a>

```csharp
public string InvalidReason { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Stale`<sup>Required</sup> <a name="Stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.stale"></a>

```csharp
public IResolvable Stale { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StaleAfter`<sup>Required</sup> <a name="StaleAfter" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.staleAfter"></a>

```csharp
public string StaleAfter { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public StreamOnViewDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput">StreamOnViewDescribeOutput</a>

---


### StreamOnViewShowOutputList <a name="StreamOnViewShowOutputList" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get"></a>

```csharp
private StreamOnViewShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StreamOnViewShowOutputOutputReference <a name="StreamOnViewShowOutputOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.baseTables">BaseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.invalidReason">InvalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.stale">Stale</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.staleAfter">StaleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput">StreamOnViewShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseTables`<sup>Required</sup> <a name="BaseTables" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.baseTables"></a>

```csharp
public string[] BaseTables { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InvalidReason`<sup>Required</sup> <a name="InvalidReason" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.invalidReason"></a>

```csharp
public string InvalidReason { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Stale`<sup>Required</sup> <a name="Stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.stale"></a>

```csharp
public IResolvable Stale { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StaleAfter`<sup>Required</sup> <a name="StaleAfter" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.staleAfter"></a>

```csharp
public string StaleAfter { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.internalValue"></a>

```csharp
public StreamOnViewShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput">StreamOnViewShowOutput</a>

---


### StreamOnViewTimeoutsOutputReference <a name="StreamOnViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StreamOnViewTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



