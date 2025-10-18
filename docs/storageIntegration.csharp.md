# `storageIntegration` Submodule <a name="`storageIntegration` Submodule" id="@cdktf/provider-snowflake.storageIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegration <a name="StorageIntegration" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration snowflake_storage_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegration(Construct Scope, string Id, StorageIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig">StorageIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig">StorageIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsExternalId">ResetStorageAwsExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl">ResetStorageAwsObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn">ResetStorageAwsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations">ResetStorageBlockedLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetUsePrivatelinkEndpoint">ResetUsePrivatelinkEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageIntegrationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>

---

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageAwsExternalId` <a name="ResetStorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsExternalId"></a>

```csharp
private void ResetStorageAwsExternalId()
```

##### `ResetStorageAwsObjectAcl` <a name="ResetStorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl"></a>

```csharp
private void ResetStorageAwsObjectAcl()
```

##### `ResetStorageAwsRoleArn` <a name="ResetStorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn"></a>

```csharp
private void ResetStorageAwsRoleArn()
```

##### `ResetStorageBlockedLocations` <a name="ResetStorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations"></a>

```csharp
private void ResetStorageBlockedLocations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUsePrivatelinkEndpoint` <a name="ResetUsePrivatelinkEndpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetUsePrivatelinkEndpoint"></a>

```csharp
private void ResetUsePrivatelinkEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StorageIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StorageIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StorageIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

StorageIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList">StorageIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn">StorageAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount">StorageGcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference">StorageIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput">StorageAllowedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalIdInput">StorageAwsExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput">StorageAwsObjectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput">StorageAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput">StorageBlockedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput">StorageProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.usePrivatelinkEndpointInput">UsePrivatelinkEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider">StorageProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl"></a>

```csharp
public string AzureConsentUrl { get; }
```

- *Type:* string

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName"></a>

```csharp
public string AzureMultiTenantAppName { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.describeOutput"></a>

```csharp
public StorageIntegrationDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList">StorageIntegrationDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `StorageAwsIamUserArn`<sup>Required</sup> <a name="StorageAwsIamUserArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn"></a>

```csharp
public string StorageAwsIamUserArn { get; }
```

- *Type:* string

---

##### `StorageGcpServiceAccount`<sup>Required</sup> <a name="StorageGcpServiceAccount" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount"></a>

```csharp
public string StorageGcpServiceAccount { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeouts"></a>

```csharp
public StorageIntegrationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference">StorageIntegrationTimeoutsOutputReference</a>

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageAllowedLocationsInput`<sup>Optional</sup> <a name="StorageAllowedLocationsInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput"></a>

```csharp
public string[] StorageAllowedLocationsInput { get; }
```

- *Type:* string[]

---

##### `StorageAwsExternalIdInput`<sup>Optional</sup> <a name="StorageAwsExternalIdInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalIdInput"></a>

```csharp
public string StorageAwsExternalIdInput { get; }
```

- *Type:* string

---

##### `StorageAwsObjectAclInput`<sup>Optional</sup> <a name="StorageAwsObjectAclInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput"></a>

```csharp
public string StorageAwsObjectAclInput { get; }
```

- *Type:* string

---

##### `StorageAwsRoleArnInput`<sup>Optional</sup> <a name="StorageAwsRoleArnInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput"></a>

```csharp
public string StorageAwsRoleArnInput { get; }
```

- *Type:* string

---

##### `StorageBlockedLocationsInput`<sup>Optional</sup> <a name="StorageBlockedLocationsInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput"></a>

```csharp
public string[] StorageBlockedLocationsInput { get; }
```

- *Type:* string[]

---

##### `StorageProviderInput`<sup>Optional</sup> <a name="StorageProviderInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput"></a>

```csharp
public string StorageProviderInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageIntegrationTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsePrivatelinkEndpointInput`<sup>Optional</sup> <a name="UsePrivatelinkEndpointInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.usePrivatelinkEndpointInput"></a>

```csharp
public string UsePrivatelinkEndpointInput { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations"></a>

```csharp
public string[] StorageAllowedLocations { get; }
```

- *Type:* string[]

---

##### `StorageAwsExternalId`<sup>Required</sup> <a name="StorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId"></a>

```csharp
public string StorageAwsExternalId { get; }
```

- *Type:* string

---

##### `StorageAwsObjectAcl`<sup>Required</sup> <a name="StorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl"></a>

```csharp
public string StorageAwsObjectAcl { get; }
```

- *Type:* string

---

##### `StorageAwsRoleArn`<sup>Required</sup> <a name="StorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn"></a>

```csharp
public string StorageAwsRoleArn { get; }
```

- *Type:* string

---

##### `StorageBlockedLocations`<sup>Required</sup> <a name="StorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations"></a>

```csharp
public string[] StorageBlockedLocations { get; }
```

- *Type:* string[]

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider"></a>

```csharp
public string StorageProvider { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.usePrivatelinkEndpoint"></a>

```csharp
public string UsePrivatelinkEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageIntegrationConfig <a name="StorageIntegrationConfig" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] StorageAllowedLocations,
    string StorageProvider,
    string AzureTenantId = null,
    string Comment = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string StorageAwsExternalId = null,
    string StorageAwsObjectAcl = null,
    string StorageAwsRoleArn = null,
    string[] StorageBlockedLocations = null,
    StorageIntegrationTimeouts Timeouts = null,
    string Type = null,
    string UsePrivatelinkEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name">Name</a></code> | <code>string</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>string[]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider">StorageProvider</a></code> | <code>string</code> | Specifies the storage provider for the integration. Valid options are: `S3` \| `S3GOV` \| `S3CHINA` \| `GCS` \| `AZURE`. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | (Default: ``) Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment">Comment</a></code> | <code>string</code> | (Default: ``) Specifies a comment for the storage integration. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | (Default: `true`). |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#id StorageIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code>string</code> | Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code>string</code> | "bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>string</code> | (Default: ``) Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code>string[]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type">Type</a></code> | <code>string</code> | (Default: `EXTERNAL_STAGE`) Specifies the type of the storage integration. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

String that specifies the identifier (i.e. name) for the integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#name StorageIntegration#name}

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations"></a>

```csharp
public string[] StorageAllowedLocations { get; set; }
```

- *Type:* string[]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#storage_allowed_locations StorageIntegration#storage_allowed_locations}

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider"></a>

```csharp
public string StorageProvider { get; set; }
```

- *Type:* string

Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

(Default: ``) Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

(Default: ``) Specifies a comment for the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#comment StorageIntegration#comment}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

(Default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#enabled StorageIntegration#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#id StorageIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageAwsExternalId`<sup>Optional</sup> <a name="StorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsExternalId"></a>

```csharp
public string StorageAwsExternalId { get; set; }
```

- *Type:* string

Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#storage_aws_external_id StorageIntegration#storage_aws_external_id}

---

##### `StorageAwsObjectAcl`<sup>Optional</sup> <a name="StorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl"></a>

```csharp
public string StorageAwsObjectAcl { get; set; }
```

- *Type:* string

"bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#storage_aws_object_acl StorageIntegration#storage_aws_object_acl}

---

##### `StorageAwsRoleArn`<sup>Optional</sup> <a name="StorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn"></a>

```csharp
public string StorageAwsRoleArn { get; set; }
```

- *Type:* string

(Default: ``) Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}

---

##### `StorageBlockedLocations`<sup>Optional</sup> <a name="StorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations"></a>

```csharp
public string[] StorageBlockedLocations { get; set; }
```

- *Type:* string[]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#storage_blocked_locations StorageIntegration#storage_blocked_locations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.timeouts"></a>

```csharp
public StorageIntegrationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#timeouts StorageIntegration#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

(Default: `EXTERNAL_STAGE`) Specifies the type of the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#type StorageIntegration#type}

---

##### `UsePrivatelinkEndpoint`<sup>Optional</sup> <a name="UsePrivatelinkEndpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.usePrivatelinkEndpoint"></a>

```csharp
public string UsePrivatelinkEndpoint { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture.

Supported for AWS S3 and Azure storage providers. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#use_privatelink_endpoint StorageIntegration#use_privatelink_endpoint}

---

### StorageIntegrationDescribeOutput <a name="StorageIntegrationDescribeOutput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutput {

};
```


### StorageIntegrationDescribeOutputAzureConsentUrl <a name="StorageIntegrationDescribeOutputAzureConsentUrl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputAzureConsentUrl {

};
```


### StorageIntegrationDescribeOutputAzureMultiTenantAppName <a name="StorageIntegrationDescribeOutputAzureMultiTenantAppName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputAzureMultiTenantAppName {

};
```


### StorageIntegrationDescribeOutputComment <a name="StorageIntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputComment {

};
```


### StorageIntegrationDescribeOutputEnabled <a name="StorageIntegrationDescribeOutputEnabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputEnabled {

};
```


### StorageIntegrationDescribeOutputStorageAllowedLocations <a name="StorageIntegrationDescribeOutputStorageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAllowedLocations {

};
```


### StorageIntegrationDescribeOutputStorageAwsExternalId <a name="StorageIntegrationDescribeOutputStorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsExternalId {

};
```


### StorageIntegrationDescribeOutputStorageAwsIamUserArn <a name="StorageIntegrationDescribeOutputStorageAwsIamUserArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsIamUserArn {

};
```


### StorageIntegrationDescribeOutputStorageAwsObjectAcl <a name="StorageIntegrationDescribeOutputStorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsObjectAcl {

};
```


### StorageIntegrationDescribeOutputStorageAwsRoleArn <a name="StorageIntegrationDescribeOutputStorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsRoleArn {

};
```


### StorageIntegrationDescribeOutputStorageBlockedLocations <a name="StorageIntegrationDescribeOutputStorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageBlockedLocations {

};
```


### StorageIntegrationDescribeOutputStorageGcpServiceAccount <a name="StorageIntegrationDescribeOutputStorageGcpServiceAccount" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageGcpServiceAccount {

};
```


### StorageIntegrationDescribeOutputStorageProvider <a name="StorageIntegrationDescribeOutputStorageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageProvider {

};
```


### StorageIntegrationDescribeOutputUsePrivatelinkEndpoint <a name="StorageIntegrationDescribeOutputUsePrivatelinkEndpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputUsePrivatelinkEndpoint {

};
```


### StorageIntegrationTimeouts <a name="StorageIntegrationTimeouts" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#create StorageIntegration#create}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#delete StorageIntegration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#read StorageIntegration#read}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#update StorageIntegration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#create StorageIntegration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#delete StorageIntegration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#read StorageIntegration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/storage_integration#update StorageIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageIntegrationDescribeOutputAzureConsentUrlList <a name="StorageIntegrationDescribeOutputAzureConsentUrlList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputAzureConsentUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.get"></a>

```csharp
private StorageIntegrationDescribeOutputAzureConsentUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputAzureConsentUrlOutputReference <a name="StorageIntegrationDescribeOutputAzureConsentUrlOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputAzureConsentUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl">StorageIntegrationDescribeOutputAzureConsentUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputAzureConsentUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrl">StorageIntegrationDescribeOutputAzureConsentUrl</a>

---


### StorageIntegrationDescribeOutputAzureMultiTenantAppNameList <a name="StorageIntegrationDescribeOutputAzureMultiTenantAppNameList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputAzureMultiTenantAppNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.get"></a>

```csharp
private StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference <a name="StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName">StorageIntegrationDescribeOutputAzureMultiTenantAppName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputAzureMultiTenantAppName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppName">StorageIntegrationDescribeOutputAzureMultiTenantAppName</a>

---


### StorageIntegrationDescribeOutputCommentList <a name="StorageIntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputCommentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.get"></a>

```csharp
private StorageIntegrationDescribeOutputCommentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputCommentOutputReference <a name="StorageIntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment">StorageIntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputComment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputComment">StorageIntegrationDescribeOutputComment</a>

---


### StorageIntegrationDescribeOutputEnabledList <a name="StorageIntegrationDescribeOutputEnabledList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputEnabledList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.get"></a>

```csharp
private StorageIntegrationDescribeOutputEnabledOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputEnabledOutputReference <a name="StorageIntegrationDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputEnabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled">StorageIntegrationDescribeOutputEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputEnabled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabled">StorageIntegrationDescribeOutputEnabled</a>

---


### StorageIntegrationDescribeOutputList <a name="StorageIntegrationDescribeOutputList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.get"></a>

```csharp
private StorageIntegrationDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputOutputReference <a name="StorageIntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureConsentUrl">AzureConsentUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList">StorageIntegrationDescribeOutputAzureConsentUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList">StorageIntegrationDescribeOutputAzureMultiTenantAppNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList">StorageIntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList">StorageIntegrationDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList">StorageIntegrationDescribeOutputStorageAllowedLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList">StorageIntegrationDescribeOutputStorageAwsExternalIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsIamUserArn">StorageAwsIamUserArn</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList">StorageIntegrationDescribeOutputStorageAwsIamUserArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList">StorageIntegrationDescribeOutputStorageAwsObjectAclList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList">StorageIntegrationDescribeOutputStorageAwsRoleArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList">StorageIntegrationDescribeOutputStorageBlockedLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageGcpServiceAccount">StorageGcpServiceAccount</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList">StorageIntegrationDescribeOutputStorageGcpServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageProvider">StorageProvider</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList">StorageIntegrationDescribeOutputStorageProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList">StorageIntegrationDescribeOutputUsePrivatelinkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput">StorageIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureConsentUrl"></a>

```csharp
public StorageIntegrationDescribeOutputAzureConsentUrlList AzureConsentUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureConsentUrlList">StorageIntegrationDescribeOutputAzureConsentUrlList</a>

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```csharp
public StorageIntegrationDescribeOutputAzureMultiTenantAppNameList AzureMultiTenantAppName { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputAzureMultiTenantAppNameList">StorageIntegrationDescribeOutputAzureMultiTenantAppNameList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.comment"></a>

```csharp
public StorageIntegrationDescribeOutputCommentList Comment { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputCommentList">StorageIntegrationDescribeOutputCommentList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.enabled"></a>

```csharp
public StorageIntegrationDescribeOutputEnabledList Enabled { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputEnabledList">StorageIntegrationDescribeOutputEnabledList</a>

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAllowedLocations"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAllowedLocationsList StorageAllowedLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList">StorageIntegrationDescribeOutputStorageAllowedLocationsList</a>

---

##### `StorageAwsExternalId`<sup>Required</sup> <a name="StorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsExternalId"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsExternalIdList StorageAwsExternalId { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList">StorageIntegrationDescribeOutputStorageAwsExternalIdList</a>

---

##### `StorageAwsIamUserArn`<sup>Required</sup> <a name="StorageAwsIamUserArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsIamUserArn"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsIamUserArnList StorageAwsIamUserArn { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList">StorageIntegrationDescribeOutputStorageAwsIamUserArnList</a>

---

##### `StorageAwsObjectAcl`<sup>Required</sup> <a name="StorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsObjectAcl"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsObjectAclList StorageAwsObjectAcl { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList">StorageIntegrationDescribeOutputStorageAwsObjectAclList</a>

---

##### `StorageAwsRoleArn`<sup>Required</sup> <a name="StorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageAwsRoleArn"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsRoleArnList StorageAwsRoleArn { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList">StorageIntegrationDescribeOutputStorageAwsRoleArnList</a>

---

##### `StorageBlockedLocations`<sup>Required</sup> <a name="StorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageBlockedLocations"></a>

```csharp
public StorageIntegrationDescribeOutputStorageBlockedLocationsList StorageBlockedLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList">StorageIntegrationDescribeOutputStorageBlockedLocationsList</a>

---

##### `StorageGcpServiceAccount`<sup>Required</sup> <a name="StorageGcpServiceAccount" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageGcpServiceAccount"></a>

```csharp
public StorageIntegrationDescribeOutputStorageGcpServiceAccountList StorageGcpServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList">StorageIntegrationDescribeOutputStorageGcpServiceAccountList</a>

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.storageProvider"></a>

```csharp
public StorageIntegrationDescribeOutputStorageProviderList StorageProvider { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList">StorageIntegrationDescribeOutputStorageProviderList</a>

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```csharp
public StorageIntegrationDescribeOutputUsePrivatelinkEndpointList UsePrivatelinkEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList">StorageIntegrationDescribeOutputUsePrivatelinkEndpointList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutput">StorageIntegrationDescribeOutput</a>

---


### StorageIntegrationDescribeOutputStorageAllowedLocationsList <a name="StorageIntegrationDescribeOutputStorageAllowedLocationsList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAllowedLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference <a name="StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations">StorageIntegrationDescribeOutputStorageAllowedLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocationsOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAllowedLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAllowedLocations">StorageIntegrationDescribeOutputStorageAllowedLocations</a>

---


### StorageIntegrationDescribeOutputStorageAwsExternalIdList <a name="StorageIntegrationDescribeOutputStorageAwsExternalIdList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsExternalIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId">StorageIntegrationDescribeOutputStorageAwsExternalId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalIdOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsExternalId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsExternalId">StorageIntegrationDescribeOutputStorageAwsExternalId</a>

---


### StorageIntegrationDescribeOutputStorageAwsIamUserArnList <a name="StorageIntegrationDescribeOutputStorageAwsIamUserArnList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsIamUserArnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn">StorageIntegrationDescribeOutputStorageAwsIamUserArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArnOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsIamUserArn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsIamUserArn">StorageIntegrationDescribeOutputStorageAwsIamUserArn</a>

---


### StorageIntegrationDescribeOutputStorageAwsObjectAclList <a name="StorageIntegrationDescribeOutputStorageAwsObjectAclList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsObjectAclList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl">StorageIntegrationDescribeOutputStorageAwsObjectAcl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAclOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsObjectAcl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsObjectAcl">StorageIntegrationDescribeOutputStorageAwsObjectAcl</a>

---


### StorageIntegrationDescribeOutputStorageAwsRoleArnList <a name="StorageIntegrationDescribeOutputStorageAwsRoleArnList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsRoleArnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference <a name="StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn">StorageIntegrationDescribeOutputStorageAwsRoleArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArnOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageAwsRoleArn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageAwsRoleArn">StorageIntegrationDescribeOutputStorageAwsRoleArn</a>

---


### StorageIntegrationDescribeOutputStorageBlockedLocationsList <a name="StorageIntegrationDescribeOutputStorageBlockedLocationsList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageBlockedLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference <a name="StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations">StorageIntegrationDescribeOutputStorageBlockedLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocationsOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageBlockedLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageBlockedLocations">StorageIntegrationDescribeOutputStorageBlockedLocations</a>

---


### StorageIntegrationDescribeOutputStorageGcpServiceAccountList <a name="StorageIntegrationDescribeOutputStorageGcpServiceAccountList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageGcpServiceAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference <a name="StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount">StorageIntegrationDescribeOutputStorageGcpServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccountOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageGcpServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageGcpServiceAccount">StorageIntegrationDescribeOutputStorageGcpServiceAccount</a>

---


### StorageIntegrationDescribeOutputStorageProviderList <a name="StorageIntegrationDescribeOutputStorageProviderList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.get"></a>

```csharp
private StorageIntegrationDescribeOutputStorageProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputStorageProviderOutputReference <a name="StorageIntegrationDescribeOutputStorageProviderOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputStorageProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider">StorageIntegrationDescribeOutputStorageProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProviderOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputStorageProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputStorageProvider">StorageIntegrationDescribeOutputStorageProvider</a>

---


### StorageIntegrationDescribeOutputUsePrivatelinkEndpointList <a name="StorageIntegrationDescribeOutputUsePrivatelinkEndpointList" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputUsePrivatelinkEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.get"></a>

```csharp
private StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference <a name="StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint">StorageIntegrationDescribeOutputUsePrivatelinkEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpointOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationDescribeOutputUsePrivatelinkEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationDescribeOutputUsePrivatelinkEndpoint">StorageIntegrationDescribeOutputUsePrivatelinkEndpoint</a>

---


### StorageIntegrationTimeoutsOutputReference <a name="StorageIntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new StorageIntegrationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageIntegrationTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationTimeouts">StorageIntegrationTimeouts</a>

---



