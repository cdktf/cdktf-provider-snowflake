# `storageIntegration` Submodule <a name="`storageIntegration` Submodule" id="@cdktf/provider-snowflake.storageIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegration <a name="StorageIntegration" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration snowflake_storage_integration}.

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
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl">ResetStorageAwsObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn">ResetStorageAwsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations">ResetStorageBlockedLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType">ResetType</a></code> | *No description.* |

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

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

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

##### `ResetType` <a name="ResetType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType"></a>

```csharp
private void ResetType()
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

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn">StorageAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount">StorageGcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput">StorageAllowedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput">StorageAwsObjectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput">StorageAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput">StorageBlockedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput">StorageProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider">StorageProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |

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
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

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
public object[] Provisioners { get; }
```

- *Type:* object[]

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

##### `StorageAwsExternalId`<sup>Required</sup> <a name="StorageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId"></a>

```csharp
public string StorageAwsExternalId { get; }
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
public object EnabledInput { get; }
```

- *Type:* object

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

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
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
public object Enabled { get; }
```

- *Type:* object

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
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] StorageAllowedLocations,
    string StorageProvider,
    string AzureTenantId = null,
    string Comment = null,
    object Enabled = null,
    string Id = null,
    string StorageAwsObjectAcl = null,
    string StorageAwsRoleArn = null,
    string[] StorageBlockedLocations = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#name StorageIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>string[]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider">StorageProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#comment StorageIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#enabled StorageIntegration#enabled}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#id StorageIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code>string</code> | "bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code>string[]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#type StorageIntegration#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

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
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#name StorageIntegration#name}.

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations"></a>

```csharp
public string[] StorageAllowedLocations { get; set; }
```

- *Type:* string[]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_allowed_locations StorageIntegration#storage_allowed_locations}

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider"></a>

```csharp
public string StorageProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}.

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#comment StorageIntegration#comment}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#enabled StorageIntegration#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#id StorageIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageAwsObjectAcl`<sup>Optional</sup> <a name="StorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl"></a>

```csharp
public string StorageAwsObjectAcl { get; set; }
```

- *Type:* string

"bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_aws_object_acl StorageIntegration#storage_aws_object_acl}

---

##### `StorageAwsRoleArn`<sup>Optional</sup> <a name="StorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn"></a>

```csharp
public string StorageAwsRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}.

---

##### `StorageBlockedLocations`<sup>Optional</sup> <a name="StorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations"></a>

```csharp
public string[] StorageBlockedLocations { get; set; }
```

- *Type:* string[]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#storage_blocked_locations StorageIntegration#storage_blocked_locations}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/storage_integration#type StorageIntegration#type}.

---



