# `materializedView` Submodule <a name="`materializedView` Submodule" id="@cdktf/provider-snowflake.materializedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedView <a name="MaterializedView" id="@cdktf/provider-snowflake.materializedView.MaterializedView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view snowflake_materialized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedView(Construct Scope, string Id, MaterializedViewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig">MaterializedViewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.materializedView.MaterializedView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig">MaterializedViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetIsSecure">ResetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetOrReplace">ResetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.materializedView.MaterializedView.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.materializedView.MaterializedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.materializedView.MaterializedView.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.materializedView.MaterializedView.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.materializedView.MaterializedView.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-snowflake.materializedView.MaterializedView.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.materializedView.MaterializedView.putTag.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.materializedView.MaterializedView.putTimeouts"></a>

```csharp
private void PutTimeouts(MaterializedViewTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.materializedView.MaterializedView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts">MaterializedViewTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSecure` <a name="ResetIsSecure" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetIsSecure"></a>

```csharp
private void ResetIsSecure()
```

##### `ResetOrReplace` <a name="ResetOrReplace" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetOrReplace"></a>

```csharp
private void ResetOrReplace()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.materializedView.MaterializedView.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaterializedView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaterializedView.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaterializedView.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaterializedView.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.materializedView.MaterializedView.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.materializedView.MaterializedView.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

MaterializedView.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MaterializedView resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.materializedView.MaterializedView.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MaterializedView to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MaterializedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.materializedView.MaterializedView.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MaterializedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList">MaterializedViewTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference">MaterializedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecureInput">IsSecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplaceInput">OrReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.statementInput">StatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecure">IsSecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplace">OrReplace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.statement">Statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.tag"></a>

```csharp
public MaterializedViewTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList">MaterializedViewTagList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.timeouts"></a>

```csharp
public MaterializedViewTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference">MaterializedViewTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSecureInput`<sup>Optional</sup> <a name="IsSecureInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecureInput"></a>

```csharp
public object IsSecureInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrReplaceInput`<sup>Optional</sup> <a name="OrReplaceInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplaceInput"></a>

```csharp
public object OrReplaceInput { get; }
```

- *Type:* object

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.statementInput"></a>

```csharp
public string StatementInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.isSecure"></a>

```csharp
public object IsSecure { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrReplace`<sup>Required</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.orReplace"></a>

```csharp
public object OrReplace { get; }
```

- *Type:* object

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.statement"></a>

```csharp
public string Statement { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedView.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.materializedView.MaterializedView.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedViewConfig <a name="MaterializedViewConfig" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedViewConfig {
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
    string Statement,
    string Warehouse,
    string Comment = null,
    string Id = null,
    object IsSecure = null,
    object OrReplace = null,
    object Tag = null,
    MaterializedViewTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the view. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the view; must be unique for the schema in which the view is created. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the view. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.statement">Statement</a></code> | <code>string</code> | Specifies the query used to create the view. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.warehouse">Warehouse</a></code> | <code>string</code> | The warehouse name. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the view. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#id MaterializedView#id}. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.isSecure">IsSecure</a></code> | <code>object</code> | (Default: `false`) Specifies that the view is secure. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.orReplace">OrReplace</a></code> | <code>object</code> | (Default: `false`) Overwrites the View if it exists. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.tag">Tag</a></code> | <code>object</code> | tag block. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts">MaterializedViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#database MaterializedView#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the view; must be unique for the schema in which the view is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#name MaterializedView#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the view. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#schema MaterializedView#schema}

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.statement"></a>

```csharp
public string Statement { get; set; }
```

- *Type:* string

Specifies the query used to create the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#statement MaterializedView#statement}

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

The warehouse name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#warehouse MaterializedView#warehouse}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#comment MaterializedView#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#id MaterializedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSecure`<sup>Optional</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.isSecure"></a>

```csharp
public object IsSecure { get; set; }
```

- *Type:* object

(Default: `false`) Specifies that the view is secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#is_secure MaterializedView#is_secure}

---

##### `OrReplace`<sup>Optional</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.orReplace"></a>

```csharp
public object OrReplace { get; set; }
```

- *Type:* object

(Default: `false`) Overwrites the View if it exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#or_replace MaterializedView#or_replace}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#tag MaterializedView#tag}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.materializedView.MaterializedViewConfig.property.timeouts"></a>

```csharp
public MaterializedViewTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts">MaterializedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#timeouts MaterializedView#timeouts}

---

### MaterializedViewTag <a name="MaterializedViewTag" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedViewTag {
    string Name,
    string Value,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.name">Name</a></code> | <code>string</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.value">Value</a></code> | <code>string</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.database">Database</a></code> | <code>string</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.schema">Schema</a></code> | <code>string</code> | Name of the schema that the tag was created in. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#name MaterializedView#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#value MaterializedView#value}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#database MaterializedView#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTag.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#schema MaterializedView#schema}

---

### MaterializedViewTimeouts <a name="MaterializedViewTimeouts" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedViewTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#create MaterializedView#create}. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#delete MaterializedView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#read MaterializedView#read}. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#update MaterializedView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#create MaterializedView#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#delete MaterializedView#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#read MaterializedView#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/materialized_view#update MaterializedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaterializedViewTagList <a name="MaterializedViewTagList" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedViewTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.get"></a>

```csharp
private MaterializedViewTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MaterializedViewTagOutputReference <a name="MaterializedViewTagOutputReference" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedViewTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MaterializedViewTimeoutsOutputReference <a name="MaterializedViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new MaterializedViewTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.materializedView.MaterializedViewTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



