# `functionPython` Submodule <a name="`functionPython` Submodule" id="@cdktf/provider-snowflake.functionPython"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionPython <a name="FunctionPython" id="@cdktf/provider-snowflake.functionPython.FunctionPython"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python snowflake_function_python}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPython(Construct Scope, string Id, FunctionPythonConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig">FunctionPythonConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig">FunctionPythonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putImports">PutImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetEnableConsoleOutput">ResetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetExternalAccessIntegrations">ResetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetFunctionDefinition">ResetFunctionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetImports">ResetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsAggregate">ResetIsAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsSecure">ResetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetMetricLevel">ResetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetNullInputBehavior">ResetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetPackages">ResetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetReturnResultsBehavior">ResetReturnResultsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.functionPython.FunctionPython.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putArguments"></a>

```csharp
private void PutArguments(IResolvable|FunctionPythonArguments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putArguments.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]

---

##### `PutImports` <a name="PutImports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putImports"></a>

```csharp
private void PutImports(IResolvable|FunctionPythonImports[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putImports.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putSecrets"></a>

```csharp
private void PutSecrets(IResolvable|FunctionPythonSecrets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putSecrets.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts"></a>

```csharp
private void PutTimeouts(FunctionPythonTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEnableConsoleOutput` <a name="ResetEnableConsoleOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetEnableConsoleOutput"></a>

```csharp
private void ResetEnableConsoleOutput()
```

##### `ResetExternalAccessIntegrations` <a name="ResetExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetExternalAccessIntegrations"></a>

```csharp
private void ResetExternalAccessIntegrations()
```

##### `ResetFunctionDefinition` <a name="ResetFunctionDefinition" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetFunctionDefinition"></a>

```csharp
private void ResetFunctionDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImports` <a name="ResetImports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetImports"></a>

```csharp
private void ResetImports()
```

##### `ResetIsAggregate` <a name="ResetIsAggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsAggregate"></a>

```csharp
private void ResetIsAggregate()
```

##### `ResetIsSecure` <a name="ResetIsSecure" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsSecure"></a>

```csharp
private void ResetIsSecure()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetMetricLevel` <a name="ResetMetricLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetMetricLevel"></a>

```csharp
private void ResetMetricLevel()
```

##### `ResetNullInputBehavior` <a name="ResetNullInputBehavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetNullInputBehavior"></a>

```csharp
private void ResetNullInputBehavior()
```

##### `ResetPackages` <a name="ResetPackages" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetPackages"></a>

```csharp
private void ResetPackages()
```

##### `ResetReturnResultsBehavior` <a name="ResetReturnResultsBehavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetReturnResultsBehavior"></a>

```csharp
private void ResetReturnResultsBehavior()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetSecrets"></a>

```csharp
private void ResetSecrets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetTraceLevel"></a>

```csharp
private void ResetTraceLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionPython resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionPython.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionPython.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionPython.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionPython.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FunctionPython resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionPython to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionPython that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FunctionPython to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList">FunctionPythonArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionLanguage">FunctionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.imports">Imports</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList">FunctionPythonImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList">FunctionPythonParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList">FunctionPythonSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList">FunctionPythonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference">FunctionPythonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.argumentsInput">ArgumentsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutputInput">EnableConsoleOutputInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrationsInput">ExternalAccessIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinitionInput">FunctionDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.handlerInput">HandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.importsInput">ImportsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregateInput">IsAggregateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecureInput">IsSecureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevelInput">MetricLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehaviorInput">NullInputBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.packagesInput">PackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehaviorInput">ReturnResultsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnTypeInput">ReturnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.secretsInput">SecretsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevelInput">TraceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinition">FunctionDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregate">IsAggregate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecure">IsSecure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevel">MetricLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehavior">NullInputBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.packages">Packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehavior">ReturnResultsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevel">TraceLevel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.arguments"></a>

```csharp
public FunctionPythonArgumentsList Arguments { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList">FunctionPythonArgumentsList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `FunctionLanguage`<sup>Required</sup> <a name="FunctionLanguage" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionLanguage"></a>

```csharp
public string FunctionLanguage { get; }
```

- *Type:* string

---

##### `Imports`<sup>Required</sup> <a name="Imports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.imports"></a>

```csharp
public FunctionPythonImportsList Imports { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList">FunctionPythonImportsList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.parameters"></a>

```csharp
public FunctionPythonParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList">FunctionPythonParametersList</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.secrets"></a>

```csharp
public FunctionPythonSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList">FunctionPythonSecretsList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.showOutput"></a>

```csharp
public FunctionPythonShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList">FunctionPythonShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeouts"></a>

```csharp
public FunctionPythonTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference">FunctionPythonTimeoutsOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.argumentsInput"></a>

```csharp
public IResolvable|FunctionPythonArguments[] ArgumentsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `EnableConsoleOutputInput`<sup>Optional</sup> <a name="EnableConsoleOutputInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutputInput"></a>

```csharp
public bool|IResolvable EnableConsoleOutputInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExternalAccessIntegrationsInput`<sup>Optional</sup> <a name="ExternalAccessIntegrationsInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrationsInput"></a>

```csharp
public string[] ExternalAccessIntegrationsInput { get; }
```

- *Type:* string[]

---

##### `FunctionDefinitionInput`<sup>Optional</sup> <a name="FunctionDefinitionInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinitionInput"></a>

```csharp
public string FunctionDefinitionInput { get; }
```

- *Type:* string

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.handlerInput"></a>

```csharp
public string HandlerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportsInput`<sup>Optional</sup> <a name="ImportsInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.importsInput"></a>

```csharp
public IResolvable|FunctionPythonImports[] ImportsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]

---

##### `IsAggregateInput`<sup>Optional</sup> <a name="IsAggregateInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregateInput"></a>

```csharp
public string IsAggregateInput { get; }
```

- *Type:* string

---

##### `IsSecureInput`<sup>Optional</sup> <a name="IsSecureInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecureInput"></a>

```csharp
public string IsSecureInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `MetricLevelInput`<sup>Optional</sup> <a name="MetricLevelInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevelInput"></a>

```csharp
public string MetricLevelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullInputBehaviorInput`<sup>Optional</sup> <a name="NullInputBehaviorInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehaviorInput"></a>

```csharp
public string NullInputBehaviorInput { get; }
```

- *Type:* string

---

##### `PackagesInput`<sup>Optional</sup> <a name="PackagesInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.packagesInput"></a>

```csharp
public string[] PackagesInput { get; }
```

- *Type:* string[]

---

##### `ReturnResultsBehaviorInput`<sup>Optional</sup> <a name="ReturnResultsBehaviorInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehaviorInput"></a>

```csharp
public string ReturnResultsBehaviorInput { get; }
```

- *Type:* string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnTypeInput"></a>

```csharp
public string ReturnTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.secretsInput"></a>

```csharp
public IResolvable|FunctionPythonSecrets[] SecretsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeoutsInput"></a>

```csharp
public IResolvable|FunctionPythonTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevelInput"></a>

```csharp
public string TraceLevelInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutput"></a>

```csharp
public bool|IResolvable EnableConsoleOutput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; }
```

- *Type:* string[]

---

##### `FunctionDefinition`<sup>Required</sup> <a name="FunctionDefinition" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinition"></a>

```csharp
public string FunctionDefinition { get; }
```

- *Type:* string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAggregate`<sup>Required</sup> <a name="IsAggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregate"></a>

```csharp
public string IsAggregate { get; }
```

- *Type:* string

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecure"></a>

```csharp
public string IsSecure { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `MetricLevel`<sup>Required</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevel"></a>

```csharp
public string MetricLevel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NullInputBehavior`<sup>Required</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehavior"></a>

```csharp
public string NullInputBehavior { get; }
```

- *Type:* string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.packages"></a>

```csharp
public string[] Packages { get; }
```

- *Type:* string[]

---

##### `ReturnResultsBehavior`<sup>Required</sup> <a name="ReturnResultsBehavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehavior"></a>

```csharp
public string ReturnResultsBehavior { get; }
```

- *Type:* string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevel"></a>

```csharp
public string TraceLevel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionPythonArguments <a name="FunctionPythonArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonArguments {
    string ArgDataType,
    string ArgName,
    string ArgDefaultValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDataType">ArgDataType</a></code> | <code>string</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argName">ArgName</a></code> | <code>string</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDefaultValue">ArgDefaultValue</a></code> | <code>string</code> | Optional default value for the argument. |

---

##### `ArgDataType`<sup>Required</sup> <a name="ArgDataType" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDataType"></a>

```csharp
public string ArgDataType { get; set; }
```

- *Type:* string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#arg_data_type FunctionPython#arg_data_type}

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argName"></a>

```csharp
public string ArgName { get; set; }
```

- *Type:* string

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the function definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#arg_name FunctionPython#arg_name}

---

##### `ArgDefaultValue`<sup>Optional</sup> <a name="ArgDefaultValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDefaultValue"></a>

```csharp
public string ArgDefaultValue { get; set; }
```

- *Type:* string

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#arg_default_value FunctionPython#arg_default_value}

---

### FunctionPythonConfig <a name="FunctionPythonConfig" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string Handler,
    string Name,
    string ReturnType,
    string RuntimeVersion,
    string Schema,
    IResolvable|FunctionPythonArguments[] Arguments = null,
    string Comment = null,
    bool|IResolvable EnableConsoleOutput = null,
    string[] ExternalAccessIntegrations = null,
    string FunctionDefinition = null,
    string Id = null,
    IResolvable|FunctionPythonImports[] Imports = null,
    string IsAggregate = null,
    string IsSecure = null,
    string LogLevel = null,
    string MetricLevel = null,
    string NullInputBehavior = null,
    string[] Packages = null,
    string ReturnResultsBehavior = null,
    IResolvable|FunctionPythonSecrets[] Secrets = null,
    FunctionPythonTimeouts Timeouts = null,
    string TraceLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.handler">Handler</a></code> | <code>string</code> | The name of the handler function or class. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.name">Name</a></code> | <code>string</code> | The name of the function; |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnType">ReturnType</a></code> | <code>string</code> | Specifies the results returned by the UDF, which determines the UDF type. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | Specifies the Python version to use. The supported versions of Python are: 3.9, 3.10, and 3.11. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.arguments">Arguments</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.comment">Comment</a></code> | <code>string</code> | (Default: `user-defined function`) Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonymous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.functionDefinition">FunctionDefinition</a></code> | <code>string</code> | Defines the handler code executed when the UDF is called. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#id FunctionPython#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.imports">Imports</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isAggregate">IsAggregate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is an aggregate function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isSecure">IsSecure</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.metricLevel">MetricLevel</a></code> | <code>string</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.nullInputBehavior">NullInputBehavior</a></code> | <code>string</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.packages">Packages</a></code> | <code>string[]</code> | The name and version number of packages required as dependencies. The value should be of the form `package_name==version_number`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnResultsBehavior">ReturnResultsBehavior</a></code> | <code>string</code> | Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` \| `IMMUTABLE`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.secrets">Secrets</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.traceLevel">TraceLevel</a></code> | <code>string</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#database FunctionPython#database}

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.handler"></a>

```csharp
public string Handler { get; set; }
```

- *Type:* string

The name of the handler function or class.

If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a function name. If the handler code is in-line with the CREATE FUNCTION statement, you can use the function name alone. When the handler code is referenced at a stage, this value should be qualified with the module name, as in the following form: `my_module.my_function`. If the handler is for a tabular UDF, the HANDLER value should be the name of a handler class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#handler FunctionPython#handler}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the function;

the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#name FunctionPython#name}

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnType"></a>

```csharp
public string ReturnType { get; set; }
```

- *Type:* string

Specifies the results returned by the UDF, which determines the UDF type.

Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#return_type FunctionPython#return_type}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

Specifies the Python version to use. The supported versions of Python are: 3.9, 3.10, and 3.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#runtime_version FunctionPython#runtime_version}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#schema FunctionPython#schema}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.arguments"></a>

```csharp
public IResolvable|FunctionPythonArguments[] Arguments { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#arguments FunctionPython#arguments}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

(Default: `user-defined function`) Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#comment FunctionPython#comment}

---

##### `EnableConsoleOutput`<sup>Optional</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.enableConsoleOutput"></a>

```csharp
public bool|IResolvable EnableConsoleOutput { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable stdout/stderr fast path logging for anonymous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#enable_console_output FunctionPython#enable_console_output}

---

##### `ExternalAccessIntegrations`<sup>Optional</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; set; }
```

- *Type:* string[]

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#external_access_integrations FunctionPython#external_access_integrations}

---

##### `FunctionDefinition`<sup>Optional</sup> <a name="FunctionDefinition" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.functionDefinition"></a>

```csharp
public string FunctionDefinition { get; set; }
```

- *Type:* string

Defines the handler code executed when the UDF is called.

Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Python source code. For more information, see [Introduction to Python UDFs](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#function_definition FunctionPython#function_definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#id FunctionPython#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Imports`<sup>Optional</sup> <a name="Imports" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.imports"></a>

```csharp
public IResolvable|FunctionPythonImports[] Imports { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#imports FunctionPython#imports}

---

##### `IsAggregate`<sup>Optional</sup> <a name="IsAggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isAggregate"></a>

```csharp
public string IsAggregate { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is an aggregate function.

For more information about user-defined aggregate functions, see [Python user-defined aggregate functions](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-aggregate-functions). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#is_aggregate FunctionPython#is_aggregate}

---

##### `IsSecure`<sup>Optional</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isSecure"></a>

```csharp
public string IsSecure { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure.

By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#is_secure FunctionPython#is_secure}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#log_level FunctionPython#log_level}

---

##### `MetricLevel`<sup>Optional</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.metricLevel"></a>

```csharp
public string MetricLevel { get; set; }
```

- *Type:* string

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#metric_level FunctionPython#metric_level}

---

##### `NullInputBehavior`<sup>Optional</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.nullInputBehavior"></a>

```csharp
public string NullInputBehavior { get; set; }
```

- *Type:* string

Specifies the behavior of the function when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#null_input_behavior FunctionPython#null_input_behavior}

---

##### `Packages`<sup>Optional</sup> <a name="Packages" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.packages"></a>

```csharp
public string[] Packages { get; set; }
```

- *Type:* string[]

The name and version number of packages required as dependencies. The value should be of the form `package_name==version_number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#packages FunctionPython#packages}

---

##### `ReturnResultsBehavior`<sup>Optional</sup> <a name="ReturnResultsBehavior" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnResultsBehavior"></a>

```csharp
public string ReturnResultsBehavior { get; set; }
```

- *Type:* string

Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#return_results_behavior FunctionPython#return_results_behavior}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.secrets"></a>

```csharp
public IResolvable|FunctionPythonSecrets[] Secrets { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#secrets FunctionPython#secrets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.timeouts"></a>

```csharp
public FunctionPythonTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#timeouts FunctionPython#timeouts}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.traceLevel"></a>

```csharp
public string TraceLevel { get; set; }
```

- *Type:* string

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#trace_level FunctionPython#trace_level}

---

### FunctionPythonImports <a name="FunctionPythonImports" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonImports {
    string PathOnStage,
    string StageLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.pathOnStage">PathOnStage</a></code> | <code>string</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.stageLocation">StageLocation</a></code> | <code>string</code> | Stage location without leading `@`. |

---

##### `PathOnStage`<sup>Required</sup> <a name="PathOnStage" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.pathOnStage"></a>

```csharp
public string PathOnStage { get; set; }
```

- *Type:* string

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#path_on_stage FunctionPython#path_on_stage}

---

##### `StageLocation`<sup>Required</sup> <a name="StageLocation" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.stageLocation"></a>

```csharp
public string StageLocation { get; set; }
```

- *Type:* string

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#stage_location FunctionPython#stage_location}

---

### FunctionPythonParameters <a name="FunctionPythonParameters" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParameters {

};
```


### FunctionPythonParametersEnableConsoleOutput <a name="FunctionPythonParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersEnableConsoleOutput {

};
```


### FunctionPythonParametersLogLevel <a name="FunctionPythonParametersLogLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersLogLevel {

};
```


### FunctionPythonParametersMetricLevel <a name="FunctionPythonParametersMetricLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersMetricLevel {

};
```


### FunctionPythonParametersTraceLevel <a name="FunctionPythonParametersTraceLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersTraceLevel {

};
```


### FunctionPythonSecrets <a name="FunctionPythonSecrets" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonSecrets {
    string SecretId,
    string SecretVariableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretId">SecretId</a></code> | <code>string</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretVariableName">SecretVariableName</a></code> | <code>string</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#secret_id FunctionPython#secret_id}

---

##### `SecretVariableName`<sup>Required</sup> <a name="SecretVariableName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretVariableName"></a>

```csharp
public string SecretVariableName { get; set; }
```

- *Type:* string

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#secret_variable_name FunctionPython#secret_variable_name}

---

### FunctionPythonShowOutput <a name="FunctionPythonShowOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonShowOutput {

};
```


### FunctionPythonTimeouts <a name="FunctionPythonTimeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#create FunctionPython#create}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#delete FunctionPython#delete}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#read FunctionPython#read}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#update FunctionPython#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#create FunctionPython#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#delete FunctionPython#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#read FunctionPython#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_python#update FunctionPython#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionPythonArgumentsList <a name="FunctionPythonArgumentsList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonArgumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.get"></a>

```csharp
private FunctionPythonArgumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonArguments[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>[]

---


### FunctionPythonArgumentsOutputReference <a name="FunctionPythonArgumentsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonArgumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resetArgDefaultValue">ResetArgDefaultValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgDefaultValue` <a name="ResetArgDefaultValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resetArgDefaultValue"></a>

```csharp
private void ResetArgDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataTypeInput">ArgDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValueInput">ArgDefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argNameInput">ArgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataType">ArgDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValue">ArgDefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argName">ArgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgDataTypeInput`<sup>Optional</sup> <a name="ArgDataTypeInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataTypeInput"></a>

```csharp
public string ArgDataTypeInput { get; }
```

- *Type:* string

---

##### `ArgDefaultValueInput`<sup>Optional</sup> <a name="ArgDefaultValueInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValueInput"></a>

```csharp
public string ArgDefaultValueInput { get; }
```

- *Type:* string

---

##### `ArgNameInput`<sup>Optional</sup> <a name="ArgNameInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argNameInput"></a>

```csharp
public string ArgNameInput { get; }
```

- *Type:* string

---

##### `ArgDataType`<sup>Required</sup> <a name="ArgDataType" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataType"></a>

```csharp
public string ArgDataType { get; }
```

- *Type:* string

---

##### `ArgDefaultValue`<sup>Required</sup> <a name="ArgDefaultValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValue"></a>

```csharp
public string ArgDefaultValue { get; }
```

- *Type:* string

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argName"></a>

```csharp
public string ArgName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonArguments InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>

---


### FunctionPythonImportsList <a name="FunctionPythonImportsList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonImportsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.get"></a>

```csharp
private FunctionPythonImportsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonImports[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>[]

---


### FunctionPythonImportsOutputReference <a name="FunctionPythonImportsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonImportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStageInput">PathOnStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocationInput">StageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStage">PathOnStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocation">StageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathOnStageInput`<sup>Optional</sup> <a name="PathOnStageInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStageInput"></a>

```csharp
public string PathOnStageInput { get; }
```

- *Type:* string

---

##### `StageLocationInput`<sup>Optional</sup> <a name="StageLocationInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocationInput"></a>

```csharp
public string StageLocationInput { get; }
```

- *Type:* string

---

##### `PathOnStage`<sup>Required</sup> <a name="PathOnStage" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStage"></a>

```csharp
public string PathOnStage { get; }
```

- *Type:* string

---

##### `StageLocation`<sup>Required</sup> <a name="StageLocation" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocation"></a>

```csharp
public string StageLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonImports InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>

---


### FunctionPythonParametersEnableConsoleOutputList <a name="FunctionPythonParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersEnableConsoleOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.get"></a>

```csharp
private FunctionPythonParametersEnableConsoleOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionPythonParametersEnableConsoleOutputOutputReference <a name="FunctionPythonParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersEnableConsoleOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput">FunctionPythonParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```csharp
public FunctionPythonParametersEnableConsoleOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput">FunctionPythonParametersEnableConsoleOutput</a>

---


### FunctionPythonParametersList <a name="FunctionPythonParametersList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.get"></a>

```csharp
private FunctionPythonParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionPythonParametersLogLevelList <a name="FunctionPythonParametersLogLevelList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersLogLevelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.get"></a>

```csharp
private FunctionPythonParametersLogLevelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionPythonParametersLogLevelOutputReference <a name="FunctionPythonParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersLogLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel">FunctionPythonParametersLogLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.internalValue"></a>

```csharp
public FunctionPythonParametersLogLevel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel">FunctionPythonParametersLogLevel</a>

---


### FunctionPythonParametersMetricLevelList <a name="FunctionPythonParametersMetricLevelList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersMetricLevelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.get"></a>

```csharp
private FunctionPythonParametersMetricLevelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionPythonParametersMetricLevelOutputReference <a name="FunctionPythonParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersMetricLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel">FunctionPythonParametersMetricLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.internalValue"></a>

```csharp
public FunctionPythonParametersMetricLevel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel">FunctionPythonParametersMetricLevel</a>

---


### FunctionPythonParametersOutputReference <a name="FunctionPythonParametersOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList">FunctionPythonParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.logLevel">LogLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList">FunctionPythonParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.metricLevel">MetricLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList">FunctionPythonParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.traceLevel">TraceLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList">FunctionPythonParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParameters">FunctionPythonParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.enableConsoleOutput"></a>

```csharp
public FunctionPythonParametersEnableConsoleOutputList EnableConsoleOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList">FunctionPythonParametersEnableConsoleOutputList</a>

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.logLevel"></a>

```csharp
public FunctionPythonParametersLogLevelList LogLevel { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList">FunctionPythonParametersLogLevelList</a>

---

##### `MetricLevel`<sup>Required</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.metricLevel"></a>

```csharp
public FunctionPythonParametersMetricLevelList MetricLevel { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList">FunctionPythonParametersMetricLevelList</a>

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.traceLevel"></a>

```csharp
public FunctionPythonParametersTraceLevelList TraceLevel { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList">FunctionPythonParametersTraceLevelList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.internalValue"></a>

```csharp
public FunctionPythonParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParameters">FunctionPythonParameters</a>

---


### FunctionPythonParametersTraceLevelList <a name="FunctionPythonParametersTraceLevelList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersTraceLevelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.get"></a>

```csharp
private FunctionPythonParametersTraceLevelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionPythonParametersTraceLevelOutputReference <a name="FunctionPythonParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonParametersTraceLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel">FunctionPythonParametersTraceLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.internalValue"></a>

```csharp
public FunctionPythonParametersTraceLevel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel">FunctionPythonParametersTraceLevel</a>

---


### FunctionPythonSecretsList <a name="FunctionPythonSecretsList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.get"></a>

```csharp
private FunctionPythonSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonSecrets[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>[]

---


### FunctionPythonSecretsOutputReference <a name="FunctionPythonSecretsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableNameInput">SecretVariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableName">SecretVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretVariableNameInput`<sup>Optional</sup> <a name="SecretVariableNameInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableNameInput"></a>

```csharp
public string SecretVariableNameInput { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretVariableName`<sup>Required</sup> <a name="SecretVariableName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableName"></a>

```csharp
public string SecretVariableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonSecrets InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>

---


### FunctionPythonShowOutputList <a name="FunctionPythonShowOutputList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.get"></a>

```csharp
private FunctionPythonShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionPythonShowOutputOutputReference <a name="FunctionPythonShowOutputOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.argumentsRaw">ArgumentsRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAggregate">IsAggregate</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAnsi">IsAnsi</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isBuiltin">IsBuiltin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isDataMetric">IsDataMetric</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isExternalFunction">IsExternalFunction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isMemoizable">IsMemoizable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isSecure">IsSecure</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isTableFunction">IsTableFunction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.maxNumArguments">MaxNumArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.minNumArguments">MinNumArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.secrets">Secrets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.validForClustering">ValidForClustering</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput">FunctionPythonShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgumentsRaw`<sup>Required</sup> <a name="ArgumentsRaw" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.argumentsRaw"></a>

```csharp
public string ArgumentsRaw { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.externalAccessIntegrations"></a>

```csharp
public string ExternalAccessIntegrations { get; }
```

- *Type:* string

---

##### `IsAggregate`<sup>Required</sup> <a name="IsAggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAggregate"></a>

```csharp
public IResolvable IsAggregate { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAnsi`<sup>Required</sup> <a name="IsAnsi" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAnsi"></a>

```csharp
public IResolvable IsAnsi { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBuiltin`<sup>Required</sup> <a name="IsBuiltin" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isBuiltin"></a>

```csharp
public IResolvable IsBuiltin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDataMetric`<sup>Required</sup> <a name="IsDataMetric" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isDataMetric"></a>

```csharp
public IResolvable IsDataMetric { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsExternalFunction`<sup>Required</sup> <a name="IsExternalFunction" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isExternalFunction"></a>

```csharp
public IResolvable IsExternalFunction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMemoizable`<sup>Required</sup> <a name="IsMemoizable" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isMemoizable"></a>

```csharp
public IResolvable IsMemoizable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isSecure"></a>

```csharp
public IResolvable IsSecure { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsTableFunction`<sup>Required</sup> <a name="IsTableFunction" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isTableFunction"></a>

```csharp
public IResolvable IsTableFunction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `MaxNumArguments`<sup>Required</sup> <a name="MaxNumArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.maxNumArguments"></a>

```csharp
public double MaxNumArguments { get; }
```

- *Type:* double

---

##### `MinNumArguments`<sup>Required</sup> <a name="MinNumArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.minNumArguments"></a>

```csharp
public double MinNumArguments { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.secrets"></a>

```csharp
public string Secrets { get; }
```

- *Type:* string

---

##### `ValidForClustering`<sup>Required</sup> <a name="ValidForClustering" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.validForClustering"></a>

```csharp
public IResolvable ValidForClustering { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.internalValue"></a>

```csharp
public FunctionPythonShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput">FunctionPythonShowOutput</a>

---


### FunctionPythonTimeoutsOutputReference <a name="FunctionPythonTimeoutsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionPythonTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FunctionPythonTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

---



