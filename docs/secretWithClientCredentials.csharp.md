# `secretWithClientCredentials` Submodule <a name="`secretWithClientCredentials` Submodule" id="@cdktf/provider-snowflake.secretWithClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithClientCredentials <a name="SecretWithClientCredentials" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials snowflake_secret_with_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentials(Construct Scope, string Id, SecretWithClientCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig">SecretWithClientCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig">SecretWithClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithClientCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithClientCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithClientCredentials.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SecretWithClientCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretWithClientCredentials resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretWithClientCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretWithClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList">SecretWithClientCredentialsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList">SecretWithClientCredentialsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthentication">ApiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.describeOutput"></a>

```csharp
public SecretWithClientCredentialsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList">SecretWithClientCredentialsDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.showOutput"></a>

```csharp
public SecretWithClientCredentialsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList">SecretWithClientCredentialsShowOutputList</a>

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthenticationInput"></a>

```csharp
public string ApiAuthenticationInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthentication"></a>

```csharp
public string ApiAuthentication { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithClientCredentialsConfig <a name="SecretWithClientCredentialsConfig" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsConfig {
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
    string[] OauthScopes,
    string Schema,
    string Comment = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.apiAuthentication">ApiAuthentication</a></code> | <code>string</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.name">Name</a></code> | <code>string</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Specifies a list of scopes to use when making a request from the OAuth server by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#id SecretWithClientCredentials#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.apiAuthentication"></a>

```csharp
public string ApiAuthentication { get; set; }
```

- *Type:* string

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_client_credentials).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#api_authentication SecretWithClientCredentials#api_authentication}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#database SecretWithClientCredentials#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#name SecretWithClientCredentials#name}

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Specifies a list of scopes to use when making a request from the OAuth server by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#oauth_scopes SecretWithClientCredentials#oauth_scopes}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#schema SecretWithClientCredentials#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#comment SecretWithClientCredentials#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_client_credentials#id SecretWithClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecretWithClientCredentialsDescribeOutput <a name="SecretWithClientCredentialsDescribeOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsDescribeOutput {

};
```


### SecretWithClientCredentialsShowOutput <a name="SecretWithClientCredentialsShowOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SecretWithClientCredentialsDescribeOutputList <a name="SecretWithClientCredentialsDescribeOutputList" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.get"></a>

```csharp
private SecretWithClientCredentialsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretWithClientCredentialsDescribeOutputOutputReference <a name="SecretWithClientCredentialsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.integrationName">IntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">OauthAccessTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput">SecretWithClientCredentialsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.integrationName"></a>

```csharp
public string IntegrationName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthAccessTokenExpiryTime`<sup>Required</sup> <a name="OauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```csharp
public string OauthAccessTokenExpiryTime { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```csharp
public string OauthRefreshTokenExpiryTime { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public SecretWithClientCredentialsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput">SecretWithClientCredentialsDescribeOutput</a>

---


### SecretWithClientCredentialsShowOutputList <a name="SecretWithClientCredentialsShowOutputList" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.get"></a>

```csharp
private SecretWithClientCredentialsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretWithClientCredentialsShowOutputOutputReference <a name="SecretWithClientCredentialsShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SecretWithClientCredentialsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput">SecretWithClientCredentialsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.internalValue"></a>

```csharp
public SecretWithClientCredentialsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput">SecretWithClientCredentialsShowOutput</a>

---



