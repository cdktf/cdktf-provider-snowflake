# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-snowflake.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-snowflake.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service snowflake_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.Service.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Service(Construct Scope, string Id, ServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.service.Service.putFromSpecification">PutFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate">PutFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetAutoResume">ResetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetAutoSuspendSecs">ResetAutoSuspendSecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetExternalAccessIntegrations">ResetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetFromSpecification">ResetFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetFromSpecificationTemplate">ResetFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetMinReadyInstances">ResetMinReadyInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetQueryWarehouse">ResetQueryWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.Service.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.service.Service.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.service.Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.Service.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.service.Service.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.service.Service.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.service.Service.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.service.Service.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.service.Service.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.service.Service.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.Service.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.Service.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.Service.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.Service.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.Service.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.Service.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.Service.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.Service.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.Service.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.service.Service.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.service.Service.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.service.Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.service.Service.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.Service.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.service.Service.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.service.Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.service.Service.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.service.Service.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.service.Service.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.service.Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFromSpecification` <a name="PutFromSpecification" id="@cdktf/provider-snowflake.service.Service.putFromSpecification"></a>

```csharp
private void PutFromSpecification(ServiceFromSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.Service.putFromSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

---

##### `PutFromSpecificationTemplate` <a name="PutFromSpecificationTemplate" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate"></a>

```csharp
private void PutFromSpecificationTemplate(ServiceFromSpecificationTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.service.Service.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.Service.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>

---

##### `ResetAutoResume` <a name="ResetAutoResume" id="@cdktf/provider-snowflake.service.Service.resetAutoResume"></a>

```csharp
private void ResetAutoResume()
```

##### `ResetAutoSuspendSecs` <a name="ResetAutoSuspendSecs" id="@cdktf/provider-snowflake.service.Service.resetAutoSuspendSecs"></a>

```csharp
private void ResetAutoSuspendSecs()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.service.Service.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetExternalAccessIntegrations` <a name="ResetExternalAccessIntegrations" id="@cdktf/provider-snowflake.service.Service.resetExternalAccessIntegrations"></a>

```csharp
private void ResetExternalAccessIntegrations()
```

##### `ResetFromSpecification` <a name="ResetFromSpecification" id="@cdktf/provider-snowflake.service.Service.resetFromSpecification"></a>

```csharp
private void ResetFromSpecification()
```

##### `ResetFromSpecificationTemplate` <a name="ResetFromSpecificationTemplate" id="@cdktf/provider-snowflake.service.Service.resetFromSpecificationTemplate"></a>

```csharp
private void ResetFromSpecificationTemplate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.service.Service.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-snowflake.service.Service.resetMaxInstances"></a>

```csharp
private void ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-snowflake.service.Service.resetMinInstances"></a>

```csharp
private void ResetMinInstances()
```

##### `ResetMinReadyInstances` <a name="ResetMinReadyInstances" id="@cdktf/provider-snowflake.service.Service.resetMinReadyInstances"></a>

```csharp
private void ResetMinReadyInstances()
```

##### `ResetQueryWarehouse` <a name="ResetQueryWarehouse" id="@cdktf/provider-snowflake.service.Service.resetQueryWarehouse"></a>

```csharp
private void ResetQueryWarehouse()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.service.Service.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.service.Service.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Service.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.service.Service.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.service.Service.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Service.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.service.Service.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Service.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Service.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Service to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList">ServiceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecification">FromSpecification</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference">ServiceFromSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplate">FromSpecificationTemplate</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference">ServiceFromSpecificationTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList">ServiceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoResumeInput">AutoResumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoSuspendSecsInput">AutoSuspendSecsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.computePoolInput">ComputePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrationsInput">ExternalAccessIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecificationInput">FromSpecificationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplateInput">FromSpecificationTemplateInput</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minInstancesInput">MinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minReadyInstancesInput">MinReadyInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.queryWarehouseInput">QueryWarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoResume">AutoResume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoSuspendSecs">AutoSuspendSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.computePool">ComputePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minReadyInstances">MinReadyInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.queryWarehouse">QueryWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.service.Service.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.service.Service.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.Service.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.service.Service.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.service.Service.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.service.Service.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.service.Service.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.service.Service.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.service.Service.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.service.Service.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.service.Service.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.service.Service.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.service.Service.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.service.Service.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.service.Service.property.describeOutput"></a>

```csharp
public ServiceDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList">ServiceDescribeOutputList</a>

---

##### `FromSpecification`<sup>Required</sup> <a name="FromSpecification" id="@cdktf/provider-snowflake.service.Service.property.fromSpecification"></a>

```csharp
public ServiceFromSpecificationOutputReference FromSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference">ServiceFromSpecificationOutputReference</a>

---

##### `FromSpecificationTemplate`<sup>Required</sup> <a name="FromSpecificationTemplate" id="@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplate"></a>

```csharp
public ServiceFromSpecificationTemplateOutputReference FromSpecificationTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference">ServiceFromSpecificationTemplateOutputReference</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.service.Service.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-snowflake.service.Service.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.service.Service.property.showOutput"></a>

```csharp
public ServiceShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList">ServiceShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.service.Service.property.timeouts"></a>

```csharp
public ServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a>

---

##### `AutoResumeInput`<sup>Optional</sup> <a name="AutoResumeInput" id="@cdktf/provider-snowflake.service.Service.property.autoResumeInput"></a>

```csharp
public string AutoResumeInput { get; }
```

- *Type:* string

---

##### `AutoSuspendSecsInput`<sup>Optional</sup> <a name="AutoSuspendSecsInput" id="@cdktf/provider-snowflake.service.Service.property.autoSuspendSecsInput"></a>

```csharp
public double AutoSuspendSecsInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.service.Service.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ComputePoolInput`<sup>Optional</sup> <a name="ComputePoolInput" id="@cdktf/provider-snowflake.service.Service.property.computePoolInput"></a>

```csharp
public string ComputePoolInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.service.Service.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrationsInput`<sup>Optional</sup> <a name="ExternalAccessIntegrationsInput" id="@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrationsInput"></a>

```csharp
public string[] ExternalAccessIntegrationsInput { get; }
```

- *Type:* string[]

---

##### `FromSpecificationInput`<sup>Optional</sup> <a name="FromSpecificationInput" id="@cdktf/provider-snowflake.service.Service.property.fromSpecificationInput"></a>

```csharp
public ServiceFromSpecification FromSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

---

##### `FromSpecificationTemplateInput`<sup>Optional</sup> <a name="FromSpecificationTemplateInput" id="@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplateInput"></a>

```csharp
public ServiceFromSpecificationTemplate FromSpecificationTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.service.Service.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-snowflake.service.Service.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-snowflake.service.Service.property.minInstancesInput"></a>

```csharp
public double MinInstancesInput { get; }
```

- *Type:* double

---

##### `MinReadyInstancesInput`<sup>Optional</sup> <a name="MinReadyInstancesInput" id="@cdktf/provider-snowflake.service.Service.property.minReadyInstancesInput"></a>

```csharp
public double MinReadyInstancesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.service.Service.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryWarehouseInput`<sup>Optional</sup> <a name="QueryWarehouseInput" id="@cdktf/provider-snowflake.service.Service.property.queryWarehouseInput"></a>

```csharp
public string QueryWarehouseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.service.Service.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.service.Service.property.timeoutsInput"></a>

```csharp
public IResolvable|ServiceTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.service.Service.property.autoResume"></a>

```csharp
public string AutoResume { get; }
```

- *Type:* string

---

##### `AutoSuspendSecs`<sup>Required</sup> <a name="AutoSuspendSecs" id="@cdktf/provider-snowflake.service.Service.property.autoSuspendSecs"></a>

```csharp
public double AutoSuspendSecs { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.service.Service.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ComputePool`<sup>Required</sup> <a name="ComputePool" id="@cdktf/provider-snowflake.service.Service.property.computePool"></a>

```csharp
public string ComputePool { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.service.Service.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.service.Service.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-snowflake.service.Service.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-snowflake.service.Service.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `MinReadyInstances`<sup>Required</sup> <a name="MinReadyInstances" id="@cdktf/provider-snowflake.service.Service.property.minReadyInstances"></a>

```csharp
public double MinReadyInstances { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.service.Service.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryWarehouse`<sup>Required</sup> <a name="QueryWarehouse" id="@cdktf/provider-snowflake.service.Service.property.queryWarehouse"></a>

```csharp
public string QueryWarehouse { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.service.Service.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.service.Service.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-snowflake.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ComputePool,
    string Database,
    string Name,
    string Schema,
    string AutoResume = null,
    double AutoSuspendSecs = null,
    string Comment = null,
    string[] ExternalAccessIntegrations = null,
    ServiceFromSpecification FromSpecification = null,
    ServiceFromSpecificationTemplate FromSpecificationTemplate = null,
    string Id = null,
    double MaxInstances = null,
    double MinInstances = null,
    double MinReadyInstances = null,
    string QueryWarehouse = null,
    ServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.computePool">ComputePool</a></code> | <code>string</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.autoResume">AutoResume</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.autoSuspendSecs">AutoSuspendSecs</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecification">FromSpecification</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecificationTemplate">FromSpecificationTemplate</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Specifies the maximum number of service instances to run. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.minInstances">MinInstances</a></code> | <code>double</code> | Specifies the minimum number of service instances to run. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.minReadyInstances">MinReadyInstances</a></code> | <code>double</code> | Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.queryWarehouse">QueryWarehouse</a></code> | <code>string</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.service.ServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.service.ServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.service.ServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.service.ServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.service.ServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.service.ServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.service.ServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ComputePool`<sup>Required</sup> <a name="ComputePool" id="@cdktf/provider-snowflake.service.ServiceConfig.property.computePool"></a>

```csharp
public string ComputePool { get; set; }
```

- *Type:* string

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#compute_pool Service#compute_pool}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.service.ServiceConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#database Service#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.service.ServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#name Service#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.service.ServiceConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#schema Service#schema}

---

##### `AutoResume`<sup>Optional</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.service.ServiceConfig.property.autoResume"></a>

```csharp
public string AutoResume { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#auto_resume Service#auto_resume}

---

##### `AutoSuspendSecs`<sup>Optional</sup> <a name="AutoSuspendSecs" id="@cdktf/provider-snowflake.service.ServiceConfig.property.autoSuspendSecs"></a>

```csharp
public double AutoSuspendSecs { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#auto_suspend_secs Service#auto_suspend_secs}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.service.ServiceConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#comment Service#comment}

---

##### `ExternalAccessIntegrations`<sup>Optional</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.service.ServiceConfig.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; set; }
```

- *Type:* string[]

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#external_access_integrations Service#external_access_integrations}

---

##### `FromSpecification`<sup>Optional</sup> <a name="FromSpecification" id="@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecification"></a>

```csharp
public ServiceFromSpecification FromSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#from_specification Service#from_specification}

---

##### `FromSpecificationTemplate`<sup>Optional</sup> <a name="FromSpecificationTemplate" id="@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecificationTemplate"></a>

```csharp
public ServiceFromSpecificationTemplate FromSpecificationTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#from_specification_template Service#from_specification_template}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.service.ServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-snowflake.service.ServiceConfig.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Specifies the maximum number of service instances to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#max_instances Service#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-snowflake.service.ServiceConfig.property.minInstances"></a>

```csharp
public double MinInstances { get; set; }
```

- *Type:* double

Specifies the minimum number of service instances to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#min_instances Service#min_instances}

---

##### `MinReadyInstances`<sup>Optional</sup> <a name="MinReadyInstances" id="@cdktf/provider-snowflake.service.ServiceConfig.property.minReadyInstances"></a>

```csharp
public double MinReadyInstances { get; set; }
```

- *Type:* double

Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#min_ready_instances Service#min_ready_instances}

---

##### `QueryWarehouse`<sup>Optional</sup> <a name="QueryWarehouse" id="@cdktf/provider-snowflake.service.ServiceConfig.property.queryWarehouse"></a>

```csharp
public string QueryWarehouse { get; set; }
```

- *Type:* string

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#query_warehouse Service#query_warehouse}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.service.ServiceConfig.property.timeouts"></a>

```csharp
public ServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#timeouts Service#timeouts}

---

### ServiceDescribeOutput <a name="ServiceDescribeOutput" id="@cdktf/provider-snowflake.service.ServiceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceDescribeOutput {

};
```


### ServiceFromSpecification <a name="ServiceFromSpecification" id="@cdktf/provider-snowflake.service.ServiceFromSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecification {
    string File = null,
    string Path = null,
    string Stage = null,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.file">File</a></code> | <code>string</code> | The file name of the service specification. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.path">Path</a></code> | <code>string</code> | The path to the service specification file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.stage">Stage</a></code> | <code>string</code> | The fully qualified name of the stage containing the service specification file. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.text">Text</a></code> | <code>string</code> | The embedded text of the service specification. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

The file name of the service specification. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#file Service#file}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the service specification file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#path Service#path}

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

The fully qualified name of the stage containing the service specification file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#stage Service#stage}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The embedded text of the service specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#text Service#text}

---

### ServiceFromSpecificationTemplate <a name="ServiceFromSpecificationTemplate" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecificationTemplate {
    IResolvable|ServiceFromSpecificationTemplateUsing[] Using,
    string File = null,
    string Path = null,
    string Stage = null,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.using">Using</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]</code> | using block. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.file">File</a></code> | <code>string</code> | The file name of the service specification template. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.path">Path</a></code> | <code>string</code> | The path to the service specification template file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.stage">Stage</a></code> | <code>string</code> | The fully qualified name of the stage containing the service specification template file. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.text">Text</a></code> | <code>string</code> | The embedded text of the service specification template. |

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.using"></a>

```csharp
public IResolvable|ServiceFromSpecificationTemplateUsing[] Using { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]

using block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#using Service#using}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

The file name of the service specification template. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#file Service#file}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the service specification template file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#path Service#path}

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

The fully qualified name of the stage containing the service specification template file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#stage Service#stage}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The embedded text of the service specification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#text Service#text}

---

### ServiceFromSpecificationTemplateUsing <a name="ServiceFromSpecificationTemplateUsing" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecificationTemplateUsing {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.key">Key</a></code> | <code>string</code> | The name of the template variable. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.value">Value</a></code> | <code>string</code> | The value to assign to the variable in the template. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of the template variable.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the spec definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#key Service#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to assign to the variable in the template.

The provider wraps it in `$$` by default, so be aware of that while referencing the argument in the spec definition. The value must either be alphanumeric or valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#value Service#value}

---

### ServiceShowOutput <a name="ServiceShowOutput" id="@cdktf/provider-snowflake.service.ServiceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceShowOutput {

};
```


### ServiceTimeouts <a name="ServiceTimeouts" id="@cdktf/provider-snowflake.service.ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#create Service#create}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#delete Service#delete}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#read Service#read}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#update Service#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#create Service#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#delete Service#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#read Service#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/service#update Service#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDescribeOutputList <a name="ServiceDescribeOutputList" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.get"></a>

```csharp
private ServiceDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServiceDescribeOutputOutputReference <a name="ServiceDescribeOutputOutputReference" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoResume">AutoResume</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoSuspendSecs">AutoSuspendSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.computePool">ComputePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.currentInstances">CurrentInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isAsyncJob">IsAsyncJob</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isJob">IsJob</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isUpgrading">IsUpgrading</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectDomain">ManagingObjectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectName">ManagingObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minReadyInstances">MinReadyInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.queryWarehouse">QueryWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.resumedOn">ResumedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.spec">Spec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.specDigest">SpecDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.suspendedOn">SuspendedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.targetInstances">TargetInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutput">ServiceDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoResume"></a>

```csharp
public IResolvable AutoResume { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoSuspendSecs`<sup>Required</sup> <a name="AutoSuspendSecs" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```csharp
public double AutoSuspendSecs { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ComputePool`<sup>Required</sup> <a name="ComputePool" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.computePool"></a>

```csharp
public string ComputePool { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CurrentInstances`<sup>Required</sup> <a name="CurrentInstances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.currentInstances"></a>

```csharp
public double CurrentInstances { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; }
```

- *Type:* string[]

---

##### `IsAsyncJob`<sup>Required</sup> <a name="IsAsyncJob" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isAsyncJob"></a>

```csharp
public IResolvable IsAsyncJob { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsJob`<sup>Required</sup> <a name="IsJob" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isJob"></a>

```csharp
public IResolvable IsJob { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsUpgrading`<sup>Required</sup> <a name="IsUpgrading" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isUpgrading"></a>

```csharp
public IResolvable IsUpgrading { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagingObjectDomain`<sup>Required</sup> <a name="ManagingObjectDomain" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectDomain"></a>

```csharp
public string ManagingObjectDomain { get; }
```

- *Type:* string

---

##### `ManagingObjectName`<sup>Required</sup> <a name="ManagingObjectName" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectName"></a>

```csharp
public string ManagingObjectName { get; }
```

- *Type:* string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `MinReadyInstances`<sup>Required</sup> <a name="MinReadyInstances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minReadyInstances"></a>

```csharp
public double MinReadyInstances { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `QueryWarehouse`<sup>Required</sup> <a name="QueryWarehouse" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.queryWarehouse"></a>

```csharp
public string QueryWarehouse { get; }
```

- *Type:* string

---

##### `ResumedOn`<sup>Required</sup> <a name="ResumedOn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.resumedOn"></a>

```csharp
public string ResumedOn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.spec"></a>

```csharp
public string Spec { get; }
```

- *Type:* string

---

##### `SpecDigest`<sup>Required</sup> <a name="SpecDigest" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.specDigest"></a>

```csharp
public string SpecDigest { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SuspendedOn`<sup>Required</sup> <a name="SuspendedOn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.suspendedOn"></a>

```csharp
public string SuspendedOn { get; }
```

- *Type:* string

---

##### `TargetInstances`<sup>Required</sup> <a name="TargetInstances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.targetInstances"></a>

```csharp
public double TargetInstances { get; }
```

- *Type:* double

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ServiceDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutput">ServiceDescribeOutput</a>

---


### ServiceFromSpecificationOutputReference <a name="ServiceFromSpecificationOutputReference" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetStage"></a>

```csharp
private void ResetStage()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.internalValue"></a>

```csharp
public ServiceFromSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

---


### ServiceFromSpecificationTemplateOutputReference <a name="ServiceFromSpecificationTemplateOutputReference" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecificationTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.putUsing"></a>

```csharp
private void PutUsing(IResolvable|ServiceFromSpecificationTemplateUsing[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.putUsing.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetStage"></a>

```csharp
private void ResetStage()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.using">Using</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList">ServiceFromSpecificationTemplateUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.usingInput">UsingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.using"></a>

```csharp
public ServiceFromSpecificationTemplateUsingList Using { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList">ServiceFromSpecificationTemplateUsingList</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.usingInput"></a>

```csharp
public IResolvable|ServiceFromSpecificationTemplateUsing[] UsingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.internalValue"></a>

```csharp
public ServiceFromSpecificationTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

---


### ServiceFromSpecificationTemplateUsingList <a name="ServiceFromSpecificationTemplateUsingList" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecificationTemplateUsingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.get"></a>

```csharp
private ServiceFromSpecificationTemplateUsingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.internalValue"></a>

```csharp
public IResolvable|ServiceFromSpecificationTemplateUsing[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>[]

---


### ServiceFromSpecificationTemplateUsingOutputReference <a name="ServiceFromSpecificationTemplateUsingOutputReference" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceFromSpecificationTemplateUsingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServiceFromSpecificationTemplateUsing InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>

---


### ServiceShowOutputList <a name="ServiceShowOutputList" id="@cdktf/provider-snowflake.service.ServiceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.get"></a>

```csharp
private ServiceShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServiceShowOutputOutputReference <a name="ServiceShowOutputOutputReference" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoResume">AutoResume</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoSuspendSecs">AutoSuspendSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.computePool">ComputePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.currentInstances">CurrentInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isAsyncJob">IsAsyncJob</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isJob">IsJob</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isUpgrading">IsUpgrading</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectDomain">ManagingObjectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectName">ManagingObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minReadyInstances">MinReadyInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.queryWarehouse">QueryWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.resumedOn">ResumedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.specDigest">SpecDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.suspendedOn">SuspendedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.targetInstances">TargetInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutput">ServiceShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoResume"></a>

```csharp
public IResolvable AutoResume { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoSuspendSecs`<sup>Required</sup> <a name="AutoSuspendSecs" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoSuspendSecs"></a>

```csharp
public double AutoSuspendSecs { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ComputePool`<sup>Required</sup> <a name="ComputePool" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.computePool"></a>

```csharp
public string ComputePool { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CurrentInstances`<sup>Required</sup> <a name="CurrentInstances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.currentInstances"></a>

```csharp
public double CurrentInstances { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; }
```

- *Type:* string[]

---

##### `IsAsyncJob`<sup>Required</sup> <a name="IsAsyncJob" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isAsyncJob"></a>

```csharp
public IResolvable IsAsyncJob { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsJob`<sup>Required</sup> <a name="IsJob" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isJob"></a>

```csharp
public IResolvable IsJob { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsUpgrading`<sup>Required</sup> <a name="IsUpgrading" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isUpgrading"></a>

```csharp
public IResolvable IsUpgrading { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagingObjectDomain`<sup>Required</sup> <a name="ManagingObjectDomain" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectDomain"></a>

```csharp
public string ManagingObjectDomain { get; }
```

- *Type:* string

---

##### `ManagingObjectName`<sup>Required</sup> <a name="ManagingObjectName" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectName"></a>

```csharp
public string ManagingObjectName { get; }
```

- *Type:* string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `MinReadyInstances`<sup>Required</sup> <a name="MinReadyInstances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minReadyInstances"></a>

```csharp
public double MinReadyInstances { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `QueryWarehouse`<sup>Required</sup> <a name="QueryWarehouse" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.queryWarehouse"></a>

```csharp
public string QueryWarehouse { get; }
```

- *Type:* string

---

##### `ResumedOn`<sup>Required</sup> <a name="ResumedOn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.resumedOn"></a>

```csharp
public string ResumedOn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SpecDigest`<sup>Required</sup> <a name="SpecDigest" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.specDigest"></a>

```csharp
public string SpecDigest { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SuspendedOn`<sup>Required</sup> <a name="SuspendedOn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.suspendedOn"></a>

```csharp
public string SuspendedOn { get; }
```

- *Type:* string

---

##### `TargetInstances`<sup>Required</sup> <a name="TargetInstances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.targetInstances"></a>

```csharp
public double TargetInstances { get; }
```

- *Type:* double

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.internalValue"></a>

```csharp
public ServiceShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceShowOutput">ServiceShowOutput</a>

---


### ServiceTimeoutsOutputReference <a name="ServiceTimeoutsOutputReference" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServiceTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>

---



