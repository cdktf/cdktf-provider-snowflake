# `grantOwnership` Submodule <a name="`grantOwnership` Submodule" id="@cdktf/provider-snowflake.grantOwnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantOwnership <a name="GrantOwnership" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership snowflake_grant_ownership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnership(Construct Scope, string Id, GrantOwnershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig">GrantOwnershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig">GrantOwnershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn">PutOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName">ResetAccountRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName">ResetDatabaseRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges">ResetOutboundPrivileges</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOn` <a name="PutOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn"></a>

```csharp
private void PutOn(GrantOwnershipOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `ResetAccountRoleName` <a name="ResetAccountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName"></a>

```csharp
private void ResetAccountRoleName()
```

##### `ResetDatabaseRoleName` <a name="ResetDatabaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName"></a>

```csharp
private void ResetDatabaseRoleName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOutboundPrivileges` <a name="ResetOutboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges"></a>

```csharp
private void ResetOutboundPrivileges()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantOwnership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantOwnership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantOwnership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantOwnership.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantOwnership to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantOwnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GrantOwnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on">On</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput">AccountRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput">DatabaseRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput">OnInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput">OutboundPrivilegesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName">AccountRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName">DatabaseRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges">OutboundPrivileges</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on"></a>

```csharp
public GrantOwnershipOnOutputReference On { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a>

---

##### `AccountRoleNameInput`<sup>Optional</sup> <a name="AccountRoleNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput"></a>

```csharp
public string AccountRoleNameInput { get; }
```

- *Type:* string

---

##### `DatabaseRoleNameInput`<sup>Optional</sup> <a name="DatabaseRoleNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput"></a>

```csharp
public string DatabaseRoleNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnInput`<sup>Optional</sup> <a name="OnInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput"></a>

```csharp
public GrantOwnershipOn OnInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `OutboundPrivilegesInput`<sup>Optional</sup> <a name="OutboundPrivilegesInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput"></a>

```csharp
public string OutboundPrivilegesInput { get; }
```

- *Type:* string

---

##### `AccountRoleName`<sup>Required</sup> <a name="AccountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName"></a>

```csharp
public string AccountRoleName { get; }
```

- *Type:* string

---

##### `DatabaseRoleName`<sup>Required</sup> <a name="DatabaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName"></a>

```csharp
public string DatabaseRoleName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OutboundPrivileges`<sup>Required</sup> <a name="OutboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges"></a>

```csharp
public string OutboundPrivileges { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantOwnershipConfig <a name="GrantOwnershipConfig" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GrantOwnershipOn On,
    string AccountRoleName = null,
    string DatabaseRoleName = null,
    string Id = null,
    string OutboundPrivileges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on">On</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName">AccountRoleName</a></code> | <code>string</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName">DatabaseRoleName</a></code> | <code>string</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#id GrantOwnership#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges">OutboundPrivileges</a></code> | <code>string</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on"></a>

```csharp
public GrantOwnershipOn On { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#on GrantOwnership#on}

---

##### `AccountRoleName`<sup>Optional</sup> <a name="AccountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName"></a>

```csharp
public string AccountRoleName { get; set; }
```

- *Type:* string

The fully qualified name of the account role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}

---

##### `DatabaseRoleName`<sup>Optional</sup> <a name="DatabaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName"></a>

```csharp
public string DatabaseRoleName { get; set; }
```

- *Type:* string

The fully qualified name of the database role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#id GrantOwnership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OutboundPrivileges`<sup>Optional</sup> <a name="OutboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges"></a>

```csharp
public string OutboundPrivileges { get; set; }
```

- *Type:* string

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}

---

### GrantOwnershipOn <a name="GrantOwnershipOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipOn {
    GrantOwnershipOnAll All = null,
    GrantOwnershipOnFuture Future = null,
    string ObjectName = null,
    string ObjectType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName">ObjectName</a></code> | <code>string</code> | Specifies the identifier for the object on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType">ObjectType</a></code> | <code>string</code> | Specifies the type of object on which you are transferring ownership. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all"></a>

```csharp
public GrantOwnershipOnAll All { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#all GrantOwnership#all}

---

##### `Future`<sup>Optional</sup> <a name="Future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future"></a>

```csharp
public GrantOwnershipOnFuture Future { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#future GrantOwnership#future}

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName"></a>

```csharp
public string ObjectName { get; set; }
```

- *Type:* string

Specifies the identifier for the object on which you are transferring ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#object_name GrantOwnership#object_name}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Specifies the type of object on which you are transferring ownership.

Available values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | COMPUTE POOL | DATA METRIC FUNCTION | DATABASE | DATABASE ROLE | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | EXTERNAL VOLUME | FAILOVER GROUP | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | ICEBERG TABLE | IMAGE REPOSITORY | INTEGRATION | MATERIALIZED VIEW | NETWORK POLICY | NETWORK RULE | PACKAGES POLICY | PIPE | PROCEDURE | MASKING POLICY | PASSWORD POLICY | PROJECTION POLICY | REPLICATION GROUP | ROLE | ROW ACCESS POLICY | SCHEMA | SESSION POLICY | SECRET | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | USER | VIEW | WAREHOUSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#object_type GrantOwnership#object_type}

---

### GrantOwnershipOnAll <a name="GrantOwnershipOnAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipOnAll {
    string ObjectTypePlural,
    string InDatabase = null,
    string InSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase">InDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema">InSchema</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; set; }
```

- *Type:* string

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase"></a>

```csharp
public string InDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema"></a>

```csharp
public string InSchema { get; set; }
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

### GrantOwnershipOnFuture <a name="GrantOwnershipOnFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipOnFuture {
    string ObjectTypePlural,
    string InDatabase = null,
    string InSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase">InDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema">InSchema</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; set; }
```

- *Type:* string

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase"></a>

```csharp
public string InDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema"></a>

```csharp
public string InSchema { get; set; }
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### GrantOwnershipOnAllOutputReference <a name="GrantOwnershipOnAllOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipOnAllOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase"></a>

```csharp
private void ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema"></a>

```csharp
private void ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase">InDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema">InSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput"></a>

```csharp
public string InDatabaseInput { get; }
```

- *Type:* string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput"></a>

```csharp
public string InSchemaInput { get; }
```

- *Type:* string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput"></a>

```csharp
public string ObjectTypePluralInput { get; }
```

- *Type:* string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase"></a>

```csharp
public string InDatabase { get; }
```

- *Type:* string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema"></a>

```csharp
public string InSchema { get; }
```

- *Type:* string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue"></a>

```csharp
public GrantOwnershipOnAll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---


### GrantOwnershipOnFutureOutputReference <a name="GrantOwnershipOnFutureOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipOnFutureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase"></a>

```csharp
private void ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema"></a>

```csharp
private void ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase">InDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema">InSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput"></a>

```csharp
public string InDatabaseInput { get; }
```

- *Type:* string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput"></a>

```csharp
public string InSchemaInput { get; }
```

- *Type:* string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput"></a>

```csharp
public string ObjectTypePluralInput { get; }
```

- *Type:* string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase"></a>

```csharp
public string InDatabase { get; }
```

- *Type:* string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema"></a>

```csharp
public string InSchema { get; }
```

- *Type:* string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue"></a>

```csharp
public GrantOwnershipOnFuture InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---


### GrantOwnershipOnOutputReference <a name="GrantOwnershipOnOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantOwnershipOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll">PutAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture">PutFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture">ResetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType">ResetObjectType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAll` <a name="PutAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll"></a>

```csharp
private void PutAll(GrantOwnershipOnAll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `PutFuture` <a name="PutFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture"></a>

```csharp
private void PutFuture(GrantOwnershipOnFuture Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetFuture` <a name="ResetFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture"></a>

```csharp
private void ResetFuture()
```

##### `ResetObjectName` <a name="ResetObjectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName"></a>

```csharp
private void ResetObjectName()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType"></a>

```csharp
private void ResetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput">AllInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput">FutureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all"></a>

```csharp
public GrantOwnershipOnAllOutputReference All { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a>

---

##### `Future`<sup>Required</sup> <a name="Future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future"></a>

```csharp
public GrantOwnershipOnFutureOutputReference Future { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput"></a>

```csharp
public GrantOwnershipOnAll AllInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `FutureInput`<sup>Optional</sup> <a name="FutureInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput"></a>

```csharp
public GrantOwnershipOnFuture FutureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput"></a>

```csharp
public string ObjectNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue"></a>

```csharp
public GrantOwnershipOn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---



