# `externalTableGrant` Submodule <a name="`externalTableGrant` Submodule" id="@cdktf/provider-snowflake.externalTableGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalTableGrant <a name="ExternalTableGrant" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant snowflake_external_table_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalTableGrant(Construct Scope, string Id, ExternalTableGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig">ExternalTableGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig">ExternalTableGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetExternalTableName">ResetExternalTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetOnAll">ResetOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetOnFuture">ResetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetRevertOwnershipToRoleName">ResetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetShares">ResetShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetEnableMultipleGrants"></a>

```csharp
private void ResetEnableMultipleGrants()
```

##### `ResetExternalTableName` <a name="ResetExternalTableName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetExternalTableName"></a>

```csharp
private void ResetExternalTableName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnAll` <a name="ResetOnAll" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetOnAll"></a>

```csharp
private void ResetOnAll()
```

##### `ResetOnFuture` <a name="ResetOnFuture" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetOnFuture"></a>

```csharp
private void ResetOnFuture()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetPrivilege"></a>

```csharp
private void ResetPrivilege()
```

##### `ResetRevertOwnershipToRoleName` <a name="ResetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetRevertOwnershipToRoleName"></a>

```csharp
private void ResetRevertOwnershipToRoleName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetShares` <a name="ResetShares" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetShares"></a>

```csharp
private void ResetShares()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalTableGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalTableGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalTableGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalTableGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ExternalTableGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ExternalTableGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalTableGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalTableGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ExternalTableGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.externalTableNameInput">ExternalTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onAllInput">OnAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onFutureInput">OnFutureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.revertOwnershipToRoleNameInput">RevertOwnershipToRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.sharesInput">SharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.externalTableName">ExternalTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onAll">OnAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onFuture">OnFuture</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.shares">Shares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.enableMultipleGrantsInput"></a>

```csharp
public object EnableMultipleGrantsInput { get; }
```

- *Type:* object

---

##### `ExternalTableNameInput`<sup>Optional</sup> <a name="ExternalTableNameInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.externalTableNameInput"></a>

```csharp
public string ExternalTableNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnAllInput`<sup>Optional</sup> <a name="OnAllInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onAllInput"></a>

```csharp
public object OnAllInput { get; }
```

- *Type:* object

---

##### `OnFutureInput`<sup>Optional</sup> <a name="OnFutureInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onFutureInput"></a>

```csharp
public object OnFutureInput { get; }
```

- *Type:* object

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.privilegeInput"></a>

```csharp
public string PrivilegeInput { get; }
```

- *Type:* string

---

##### `RevertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="RevertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.revertOwnershipToRoleNameInput"></a>

```csharp
public string RevertOwnershipToRoleNameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SharesInput`<sup>Optional</sup> <a name="SharesInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.sharesInput"></a>

```csharp
public string[] SharesInput { get; }
```

- *Type:* string[]

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; }
```

- *Type:* object

---

##### `ExternalTableName`<sup>Required</sup> <a name="ExternalTableName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.externalTableName"></a>

```csharp
public string ExternalTableName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnAll`<sup>Required</sup> <a name="OnAll" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onAll"></a>

```csharp
public object OnAll { get; }
```

- *Type:* object

---

##### `OnFuture`<sup>Required</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.onFuture"></a>

```csharp
public object OnFuture { get; }
```

- *Type:* object

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `RevertOwnershipToRoleName`<sup>Required</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.revertOwnershipToRoleName"></a>

```csharp
public string RevertOwnershipToRoleName { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Shares`<sup>Required</sup> <a name="Shares" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.shares"></a>

```csharp
public string[] Shares { get; }
```

- *Type:* string[]

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalTableGrantConfig <a name="ExternalTableGrantConfig" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ExternalTableGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string[] Roles,
    object EnableMultipleGrants = null,
    string ExternalTableName = null,
    string Id = null,
    object OnAll = null,
    object OnFuture = null,
    string Privilege = null,
    string RevertOwnershipToRoleName = null,
    string SchemaName = null,
    string[] Shares = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database containing the current or future external tables on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.roles">Roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.externalTableName">ExternalTableName</a></code> | <code>string</code> | The name of the external table on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#id ExternalTableGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.onAll">OnAll</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all external tables in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.onFuture">OnFuture</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all future external tables in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.privilege">Privilege</a></code> | <code>string</code> | The privilege to grant on the current or future external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>string</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema containing the current or future external tables on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.shares">Shares</a></code> | <code>string[]</code> | Grants privilege to these shares (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database containing the current or future external tables on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#database_name ExternalTableGrant#database_name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#roles ExternalTableGrant#roles}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; set; }
```

- *Type:* object

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#enable_multiple_grants ExternalTableGrant#enable_multiple_grants}

---

##### `ExternalTableName`<sup>Optional</sup> <a name="ExternalTableName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.externalTableName"></a>

```csharp
public string ExternalTableName { get; set; }
```

- *Type:* string

The name of the external table on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#external_table_name ExternalTableGrant#external_table_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#id ExternalTableGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAll`<sup>Optional</sup> <a name="OnAll" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.onAll"></a>

```csharp
public object OnAll { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all external tables in the given schema.

When this is true and no schema_name is provided apply this grant on all external tables in the given database. The external_table_name and shares fields must be unset in order to use on_all. Cannot be used together with on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#on_all ExternalTableGrant#on_all}

---

##### `OnFuture`<sup>Optional</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.onFuture"></a>

```csharp
public object OnFuture { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all future external tables in the given schema.

When this is true and no schema_name is provided apply this grant on all future external tables in the given database. The external_table_name and shares fields must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#on_future ExternalTableGrant#on_future}

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.privilege"></a>

```csharp
public string Privilege { get; set; }
```

- *Type:* string

The privilege to grant on the current or future external table.

To grant all privileges, use the value `ALL PRIVILEGES`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#privilege ExternalTableGrant#privilege}

---

##### `RevertOwnershipToRoleName`<sup>Optional</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.revertOwnershipToRoleName"></a>

```csharp
public string RevertOwnershipToRoleName { get; set; }
```

- *Type:* string

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#revert_ownership_to_role_name ExternalTableGrant#revert_ownership_to_role_name}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema containing the current or future external tables on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#schema_name ExternalTableGrant#schema_name}

---

##### `Shares`<sup>Optional</sup> <a name="Shares" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.shares"></a>

```csharp
public string[] Shares { get; set; }
```

- *Type:* string[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#shares ExternalTableGrant#shares}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.externalTableGrant.ExternalTableGrantConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/external_table_grant#with_grant_option ExternalTableGrant#with_grant_option}

---



