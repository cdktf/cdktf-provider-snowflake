# `functionScala` Submodule <a name="`functionScala` Submodule" id="@cdktf/provider-snowflake.functionScala"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionScala <a name="FunctionScala" id="@cdktf/provider-snowflake.functionScala.FunctionScala"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala snowflake_function_scala}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScala(scope Construct, id *string, config FunctionScalaConfig) FunctionScala
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig">FunctionScalaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.functionScala.FunctionScala.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig">FunctionScalaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.putImports">PutImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.putTargetPath">PutTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetEnableConsoleOutput">ResetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetExternalAccessIntegrations">ResetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetFunctionDefinition">ResetFunctionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetImports">ResetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetIsSecure">ResetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetMetricLevel">ResetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetNullInputBehavior">ResetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetPackages">ResetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetReturnResultsBehavior">ResetReturnResultsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetTargetPath">ResetTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScala.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.functionScala.FunctionScala.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.functionScala.FunctionScala.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionScala.FunctionScala.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.functionScala.FunctionScala.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.functionScala.FunctionScala.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.functionScala.FunctionScala.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.functionScala.FunctionScala.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.functionScala.FunctionScala.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.functionScala.FunctionScala.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.functionScala.FunctionScala.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionScala.FunctionScala.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionScala.FunctionScala.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScala.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionScala.FunctionScala.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putArguments"></a>

```go
func PutArguments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putArguments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImports` <a name="PutImports" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putImports"></a>

```go
func PutImports(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putImports.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putSecrets"></a>

```go
func PutSecrets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putSecrets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetPath` <a name="PutTargetPath" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putTargetPath"></a>

```go
func PutTargetPath(value FunctionScalaTargetPath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putTargetPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putTimeouts"></a>

```go
func PutTimeouts(value FunctionScalaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionScala.FunctionScala.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts">FunctionScalaTimeouts</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetComment"></a>

```go
func ResetComment()
```

##### `ResetEnableConsoleOutput` <a name="ResetEnableConsoleOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetEnableConsoleOutput"></a>

```go
func ResetEnableConsoleOutput()
```

##### `ResetExternalAccessIntegrations` <a name="ResetExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetExternalAccessIntegrations"></a>

```go
func ResetExternalAccessIntegrations()
```

##### `ResetFunctionDefinition` <a name="ResetFunctionDefinition" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetFunctionDefinition"></a>

```go
func ResetFunctionDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetId"></a>

```go
func ResetId()
```

##### `ResetImports` <a name="ResetImports" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetImports"></a>

```go
func ResetImports()
```

##### `ResetIsSecure` <a name="ResetIsSecure" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetIsSecure"></a>

```go
func ResetIsSecure()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMetricLevel` <a name="ResetMetricLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetMetricLevel"></a>

```go
func ResetMetricLevel()
```

##### `ResetNullInputBehavior` <a name="ResetNullInputBehavior" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetNullInputBehavior"></a>

```go
func ResetNullInputBehavior()
```

##### `ResetPackages` <a name="ResetPackages" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetPackages"></a>

```go
func ResetPackages()
```

##### `ResetReturnResultsBehavior` <a name="ResetReturnResultsBehavior" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetReturnResultsBehavior"></a>

```go
func ResetReturnResultsBehavior()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetSecrets"></a>

```go
func ResetSecrets()
```

##### `ResetTargetPath` <a name="ResetTargetPath" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetTargetPath"></a>

```go
func ResetTargetPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScala.resetTraceLevel"></a>

```go
func ResetTraceLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionScala resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.functionScala.FunctionScala.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.FunctionScala_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionScala.FunctionScala.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.functionScala.FunctionScala.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.FunctionScala_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionScala.FunctionScala.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScala.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.FunctionScala_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionScala.FunctionScala.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.functionScala.FunctionScala.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.FunctionScala_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FunctionScala resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionScala.FunctionScala.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FunctionScala to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FunctionScala that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionScala.FunctionScala.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FunctionScala to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList">FunctionScalaArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.functionLanguage">FunctionLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.imports">Imports</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList">FunctionScalaImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList">FunctionScalaParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList">FunctionScalaSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList">FunctionScalaShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.targetPath">TargetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference">FunctionScalaTargetPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference">FunctionScalaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.argumentsInput">ArgumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.enableConsoleOutputInput">EnableConsoleOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.externalAccessIntegrationsInput">ExternalAccessIntegrationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.functionDefinitionInput">FunctionDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.handlerInput">HandlerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.importsInput">ImportsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.isSecureInput">IsSecureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.metricLevelInput">MetricLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.nullInputBehaviorInput">NullInputBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.packagesInput">PackagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnResultsBehaviorInput">ReturnResultsBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnTypeInput">ReturnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.secretsInput">SecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.targetPathInput">TargetPathInput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.traceLevelInput">TraceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.functionDefinition">FunctionDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.handler">Handler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.isSecure">IsSecure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.metricLevel">MetricLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.nullInputBehavior">NullInputBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.packages">Packages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnResultsBehavior">ReturnResultsBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnType">ReturnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.arguments"></a>

```go
func Arguments() FunctionScalaArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList">FunctionScalaArgumentsList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `FunctionLanguage`<sup>Required</sup> <a name="FunctionLanguage" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.functionLanguage"></a>

```go
func FunctionLanguage() *string
```

- *Type:* *string

---

##### `Imports`<sup>Required</sup> <a name="Imports" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.imports"></a>

```go
func Imports() FunctionScalaImportsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList">FunctionScalaImportsList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.parameters"></a>

```go
func Parameters() FunctionScalaParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList">FunctionScalaParametersList</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.secrets"></a>

```go
func Secrets() FunctionScalaSecretsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList">FunctionScalaSecretsList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.showOutput"></a>

```go
func ShowOutput() FunctionScalaShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList">FunctionScalaShowOutputList</a>

---

##### `TargetPath`<sup>Required</sup> <a name="TargetPath" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.targetPath"></a>

```go
func TargetPath() FunctionScalaTargetPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference">FunctionScalaTargetPathOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.timeouts"></a>

```go
func Timeouts() FunctionScalaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference">FunctionScalaTimeoutsOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.argumentsInput"></a>

```go
func ArgumentsInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `EnableConsoleOutputInput`<sup>Optional</sup> <a name="EnableConsoleOutputInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.enableConsoleOutputInput"></a>

```go
func EnableConsoleOutputInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalAccessIntegrationsInput`<sup>Optional</sup> <a name="ExternalAccessIntegrationsInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.externalAccessIntegrationsInput"></a>

```go
func ExternalAccessIntegrationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionDefinitionInput`<sup>Optional</sup> <a name="FunctionDefinitionInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.functionDefinitionInput"></a>

```go
func FunctionDefinitionInput() *string
```

- *Type:* *string

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.handlerInput"></a>

```go
func HandlerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportsInput`<sup>Optional</sup> <a name="ImportsInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.importsInput"></a>

```go
func ImportsInput() interface{}
```

- *Type:* interface{}

---

##### `IsSecureInput`<sup>Optional</sup> <a name="IsSecureInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.isSecureInput"></a>

```go
func IsSecureInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MetricLevelInput`<sup>Optional</sup> <a name="MetricLevelInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.metricLevelInput"></a>

```go
func MetricLevelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullInputBehaviorInput`<sup>Optional</sup> <a name="NullInputBehaviorInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.nullInputBehaviorInput"></a>

```go
func NullInputBehaviorInput() *string
```

- *Type:* *string

---

##### `PackagesInput`<sup>Optional</sup> <a name="PackagesInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.packagesInput"></a>

```go
func PackagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReturnResultsBehaviorInput`<sup>Optional</sup> <a name="ReturnResultsBehaviorInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnResultsBehaviorInput"></a>

```go
func ReturnResultsBehaviorInput() *string
```

- *Type:* *string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnTypeInput"></a>

```go
func ReturnTypeInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.secretsInput"></a>

```go
func SecretsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetPathInput`<sup>Optional</sup> <a name="TargetPathInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.targetPathInput"></a>

```go
func TargetPathInput() FunctionScalaTargetPath
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.traceLevelInput"></a>

```go
func TraceLevelInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.enableConsoleOutput"></a>

```go
func EnableConsoleOutput() interface{}
```

- *Type:* interface{}

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionDefinition`<sup>Required</sup> <a name="FunctionDefinition" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.functionDefinition"></a>

```go
func FunctionDefinition() *string
```

- *Type:* *string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.handler"></a>

```go
func Handler() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.isSecure"></a>

```go
func IsSecure() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `MetricLevel`<sup>Required</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.metricLevel"></a>

```go
func MetricLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NullInputBehavior`<sup>Required</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.nullInputBehavior"></a>

```go
func NullInputBehavior() *string
```

- *Type:* *string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.packages"></a>

```go
func Packages() *[]*string
```

- *Type:* *[]*string

---

##### `ReturnResultsBehavior`<sup>Required</sup> <a name="ReturnResultsBehavior" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnResultsBehavior"></a>

```go
func ReturnResultsBehavior() *string
```

- *Type:* *string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.returnType"></a>

```go
func ReturnType() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.traceLevel"></a>

```go
func TraceLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScala.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.functionScala.FunctionScala.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionScalaArguments <a name="FunctionScalaArguments" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaArguments {
	ArgDataType: *string,
	ArgName: *string,
	ArgDefaultValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.property.argDataType">ArgDataType</a></code> | <code>*string</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.property.argName">ArgName</a></code> | <code>*string</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.property.argDefaultValue">ArgDefaultValue</a></code> | <code>*string</code> | Optional default value for the argument. |

---

##### `ArgDataType`<sup>Required</sup> <a name="ArgDataType" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.property.argDataType"></a>

```go
ArgDataType *string
```

- *Type:* *string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#arg_data_type FunctionScala#arg_data_type}

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.property.argName"></a>

```go
ArgName *string
```

- *Type:* *string

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the function definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#arg_name FunctionScala#arg_name}

---

##### `ArgDefaultValue`<sup>Optional</sup> <a name="ArgDefaultValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArguments.property.argDefaultValue"></a>

```go
ArgDefaultValue *string
```

- *Type:* *string

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#arg_default_value FunctionScala#arg_default_value}

---

### FunctionScalaConfig <a name="FunctionScalaConfig" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Handler: *string,
	Name: *string,
	ReturnType: *string,
	RuntimeVersion: *string,
	Schema: *string,
	Arguments: interface{},
	Comment: *string,
	EnableConsoleOutput: interface{},
	ExternalAccessIntegrations: *[]*string,
	FunctionDefinition: *string,
	Id: *string,
	Imports: interface{},
	IsSecure: *string,
	LogLevel: *string,
	MetricLevel: *string,
	NullInputBehavior: *string,
	Packages: *[]*string,
	ReturnResultsBehavior: *string,
	Secrets: interface{},
	TargetPath: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.functionScala.FunctionScalaTargetPath,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.functionScala.FunctionScalaTimeouts,
	TraceLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.handler">Handler</a></code> | <code>*string</code> | The name of the handler method or class. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.name">Name</a></code> | <code>*string</code> | The name of the function; |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.returnType">ReturnType</a></code> | <code>*string</code> | Specifies the results returned by the UDF, which determines the UDF type. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Specifies the Scala runtime version to use. The supported versions of Scala are: 2.12. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.arguments">Arguments</a></code> | <code>interface{}</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.comment">Comment</a></code> | <code>*string</code> | (Default: `user-defined function`) Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | Enable stdout/stderr fast path logging for anonymous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.functionDefinition">FunctionDefinition</a></code> | <code>*string</code> | Defines the handler code executed when the UDF is called. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#id FunctionScala#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.imports">Imports</a></code> | <code>interface{}</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.isSecure">IsSecure</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.metricLevel">MetricLevel</a></code> | <code>*string</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.nullInputBehavior">NullInputBehavior</a></code> | <code>*string</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.packages">Packages</a></code> | <code>*[]*string</code> | The name and version number of Snowflake system packages required as dependencies. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.returnResultsBehavior">ReturnResultsBehavior</a></code> | <code>*string</code> | Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` \| `IMMUTABLE`. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.secrets">Secrets</a></code> | <code>interface{}</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.targetPath">TargetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts">FunctionScalaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#database FunctionScala#database}

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.handler"></a>

```go
Handler *string
```

- *Type:* *string

The name of the handler method or class.

If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a method name, as in the following form: `MyClass.myMethod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#handler FunctionScala#handler}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the function;

the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#name FunctionScala#name}

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.returnType"></a>

```go
ReturnType *string
```

- *Type:* *string

Specifies the results returned by the UDF, which determines the UDF type.

Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#return_type FunctionScala#return_type}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Specifies the Scala runtime version to use. The supported versions of Scala are: 2.12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#runtime_version FunctionScala#runtime_version}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#schema FunctionScala#schema}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.arguments"></a>

```go
Arguments interface{}
```

- *Type:* interface{}

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#arguments FunctionScala#arguments}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

(Default: `user-defined function`) Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#comment FunctionScala#comment}

---

##### `EnableConsoleOutput`<sup>Optional</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.enableConsoleOutput"></a>

```go
EnableConsoleOutput interface{}
```

- *Type:* interface{}

Enable stdout/stderr fast path logging for anonymous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#enable_console_output FunctionScala#enable_console_output}

---

##### `ExternalAccessIntegrations`<sup>Optional</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.externalAccessIntegrations"></a>

```go
ExternalAccessIntegrations *[]*string
```

- *Type:* *[]*string

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#external_access_integrations FunctionScala#external_access_integrations}

---

##### `FunctionDefinition`<sup>Optional</sup> <a name="FunctionDefinition" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.functionDefinition"></a>

```go
FunctionDefinition *string
```

- *Type:* *string

Defines the handler code executed when the UDF is called.

Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Scala source code. For more information, see [Introduction to Scala UDFs](https://docs.snowflake.com/en/developer-guide/udf/scala/udf-scala-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#function_definition FunctionScala#function_definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#id FunctionScala#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Imports`<sup>Optional</sup> <a name="Imports" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.imports"></a>

```go
Imports interface{}
```

- *Type:* interface{}

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#imports FunctionScala#imports}

---

##### `IsSecure`<sup>Optional</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.isSecure"></a>

```go
IsSecure *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure.

By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#is_secure FunctionScala#is_secure}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#log_level FunctionScala#log_level}

---

##### `MetricLevel`<sup>Optional</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.metricLevel"></a>

```go
MetricLevel *string
```

- *Type:* *string

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#metric_level FunctionScala#metric_level}

---

##### `NullInputBehavior`<sup>Optional</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.nullInputBehavior"></a>

```go
NullInputBehavior *string
```

- *Type:* *string

Specifies the behavior of the function when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#null_input_behavior FunctionScala#null_input_behavior}

---

##### `Packages`<sup>Optional</sup> <a name="Packages" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.packages"></a>

```go
Packages *[]*string
```

- *Type:* *[]*string

The name and version number of Snowflake system packages required as dependencies.

The value should be of the form `package_name:version_number`, where `package_name` is `snowflake_domain:package`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#packages FunctionScala#packages}

---

##### `ReturnResultsBehavior`<sup>Optional</sup> <a name="ReturnResultsBehavior" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.returnResultsBehavior"></a>

```go
ReturnResultsBehavior *string
```

- *Type:* *string

Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#return_results_behavior FunctionScala#return_results_behavior}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.secrets"></a>

```go
Secrets interface{}
```

- *Type:* interface{}

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#secrets FunctionScala#secrets}

---

##### `TargetPath`<sup>Optional</sup> <a name="TargetPath" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.targetPath"></a>

```go
TargetPath FunctionScalaTargetPath
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#target_path FunctionScala#target_path}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.timeouts"></a>

```go
Timeouts FunctionScalaTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts">FunctionScalaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#timeouts FunctionScala#timeouts}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaConfig.property.traceLevel"></a>

```go
TraceLevel *string
```

- *Type:* *string

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#trace_level FunctionScala#trace_level}

---

### FunctionScalaImports <a name="FunctionScalaImports" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImports.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaImports {
	PathOnStage: *string,
	StageLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImports.property.pathOnStage">PathOnStage</a></code> | <code>*string</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImports.property.stageLocation">StageLocation</a></code> | <code>*string</code> | Stage location without leading `@`. |

---

##### `PathOnStage`<sup>Required</sup> <a name="PathOnStage" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImports.property.pathOnStage"></a>

```go
PathOnStage *string
```

- *Type:* *string

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#path_on_stage FunctionScala#path_on_stage}

---

##### `StageLocation`<sup>Required</sup> <a name="StageLocation" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImports.property.stageLocation"></a>

```go
StageLocation *string
```

- *Type:* *string

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#stage_location FunctionScala#stage_location}

---

### FunctionScalaParameters <a name="FunctionScalaParameters" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaParameters {

}
```


### FunctionScalaParametersEnableConsoleOutput <a name="FunctionScalaParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaParametersEnableConsoleOutput {

}
```


### FunctionScalaParametersLogLevel <a name="FunctionScalaParametersLogLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaParametersLogLevel {

}
```


### FunctionScalaParametersMetricLevel <a name="FunctionScalaParametersMetricLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaParametersMetricLevel {

}
```


### FunctionScalaParametersTraceLevel <a name="FunctionScalaParametersTraceLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaParametersTraceLevel {

}
```


### FunctionScalaSecrets <a name="FunctionScalaSecrets" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaSecrets {
	SecretId: *string,
	SecretVariableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecrets.property.secretId">SecretId</a></code> | <code>*string</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecrets.property.secretVariableName">SecretVariableName</a></code> | <code>*string</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecrets.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#secret_id FunctionScala#secret_id}

---

##### `SecretVariableName`<sup>Required</sup> <a name="SecretVariableName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecrets.property.secretVariableName"></a>

```go
SecretVariableName *string
```

- *Type:* *string

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#secret_variable_name FunctionScala#secret_variable_name}

---

### FunctionScalaShowOutput <a name="FunctionScalaShowOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaShowOutput {

}
```


### FunctionScalaTargetPath <a name="FunctionScalaTargetPath" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaTargetPath {
	PathOnStage: *string,
	StageLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath.property.pathOnStage">PathOnStage</a></code> | <code>*string</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath.property.stageLocation">StageLocation</a></code> | <code>*string</code> | Stage location without leading `@`. |

---

##### `PathOnStage`<sup>Required</sup> <a name="PathOnStage" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath.property.pathOnStage"></a>

```go
PathOnStage *string
```

- *Type:* *string

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#path_on_stage FunctionScala#path_on_stage}

---

##### `StageLocation`<sup>Required</sup> <a name="StageLocation" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath.property.stageLocation"></a>

```go
StageLocation *string
```

- *Type:* *string

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#stage_location FunctionScala#stage_location}

---

### FunctionScalaTimeouts <a name="FunctionScalaTimeouts" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

&functionscala.FunctionScalaTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#create FunctionScala#create}. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#delete FunctionScala#delete}. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#read FunctionScala#read}. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#update FunctionScala#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#create FunctionScala#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#delete FunctionScala#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#read FunctionScala#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/function_scala#update FunctionScala#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionScalaArgumentsList <a name="FunctionScalaArgumentsList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.get"></a>

```go
func Get(index *f64) FunctionScalaArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionScalaArgumentsOutputReference <a name="FunctionScalaArgumentsOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.resetArgDefaultValue">ResetArgDefaultValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgDefaultValue` <a name="ResetArgDefaultValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.resetArgDefaultValue"></a>

```go
func ResetArgDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDataTypeInput">ArgDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDefaultValueInput">ArgDefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argNameInput">ArgNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDataType">ArgDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDefaultValue">ArgDefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argName">ArgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgDataTypeInput`<sup>Optional</sup> <a name="ArgDataTypeInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDataTypeInput"></a>

```go
func ArgDataTypeInput() *string
```

- *Type:* *string

---

##### `ArgDefaultValueInput`<sup>Optional</sup> <a name="ArgDefaultValueInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDefaultValueInput"></a>

```go
func ArgDefaultValueInput() *string
```

- *Type:* *string

---

##### `ArgNameInput`<sup>Optional</sup> <a name="ArgNameInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argNameInput"></a>

```go
func ArgNameInput() *string
```

- *Type:* *string

---

##### `ArgDataType`<sup>Required</sup> <a name="ArgDataType" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDataType"></a>

```go
func ArgDataType() *string
```

- *Type:* *string

---

##### `ArgDefaultValue`<sup>Required</sup> <a name="ArgDefaultValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argDefaultValue"></a>

```go
func ArgDefaultValue() *string
```

- *Type:* *string

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.argName"></a>

```go
func ArgName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionScalaImportsList <a name="FunctionScalaImportsList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaImportsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaImportsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.get"></a>

```go
func Get(index *f64) FunctionScalaImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionScalaImportsOutputReference <a name="FunctionScalaImportsOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaImportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaImportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.pathOnStageInput">PathOnStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.stageLocationInput">StageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.pathOnStage">PathOnStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.stageLocation">StageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathOnStageInput`<sup>Optional</sup> <a name="PathOnStageInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.pathOnStageInput"></a>

```go
func PathOnStageInput() *string
```

- *Type:* *string

---

##### `StageLocationInput`<sup>Optional</sup> <a name="StageLocationInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.stageLocationInput"></a>

```go
func StageLocationInput() *string
```

- *Type:* *string

---

##### `PathOnStage`<sup>Required</sup> <a name="PathOnStage" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.pathOnStage"></a>

```go
func PathOnStage() *string
```

- *Type:* *string

---

##### `StageLocation`<sup>Required</sup> <a name="StageLocation" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.stageLocation"></a>

```go
func StageLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaImportsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionScalaParametersEnableConsoleOutputList <a name="FunctionScalaParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersEnableConsoleOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaParametersEnableConsoleOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.get"></a>

```go
func Get(index *f64) FunctionScalaParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FunctionScalaParametersEnableConsoleOutputOutputReference <a name="FunctionScalaParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersEnableConsoleOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaParametersEnableConsoleOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutput">FunctionScalaParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaParametersEnableConsoleOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutput">FunctionScalaParametersEnableConsoleOutput</a>

---


### FunctionScalaParametersList <a name="FunctionScalaParametersList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.get"></a>

```go
func Get(index *f64) FunctionScalaParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FunctionScalaParametersLogLevelList <a name="FunctionScalaParametersLogLevelList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersLogLevelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaParametersLogLevelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.get"></a>

```go
func Get(index *f64) FunctionScalaParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FunctionScalaParametersLogLevelOutputReference <a name="FunctionScalaParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersLogLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaParametersLogLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevel">FunctionScalaParametersLogLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaParametersLogLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevel">FunctionScalaParametersLogLevel</a>

---


### FunctionScalaParametersMetricLevelList <a name="FunctionScalaParametersMetricLevelList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersMetricLevelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaParametersMetricLevelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.get"></a>

```go
func Get(index *f64) FunctionScalaParametersMetricLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FunctionScalaParametersMetricLevelOutputReference <a name="FunctionScalaParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersMetricLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaParametersMetricLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevel">FunctionScalaParametersMetricLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaParametersMetricLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevel">FunctionScalaParametersMetricLevel</a>

---


### FunctionScalaParametersOutputReference <a name="FunctionScalaParametersOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList">FunctionScalaParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.logLevel">LogLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList">FunctionScalaParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.metricLevel">MetricLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList">FunctionScalaParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.traceLevel">TraceLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList">FunctionScalaParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParameters">FunctionScalaParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.enableConsoleOutput"></a>

```go
func EnableConsoleOutput() FunctionScalaParametersEnableConsoleOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersEnableConsoleOutputList">FunctionScalaParametersEnableConsoleOutputList</a>

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.logLevel"></a>

```go
func LogLevel() FunctionScalaParametersLogLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersLogLevelList">FunctionScalaParametersLogLevelList</a>

---

##### `MetricLevel`<sup>Required</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.metricLevel"></a>

```go
func MetricLevel() FunctionScalaParametersMetricLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersMetricLevelList">FunctionScalaParametersMetricLevelList</a>

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.traceLevel"></a>

```go
func TraceLevel() FunctionScalaParametersTraceLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList">FunctionScalaParametersTraceLevelList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParameters">FunctionScalaParameters</a>

---


### FunctionScalaParametersTraceLevelList <a name="FunctionScalaParametersTraceLevelList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersTraceLevelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaParametersTraceLevelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.get"></a>

```go
func Get(index *f64) FunctionScalaParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FunctionScalaParametersTraceLevelOutputReference <a name="FunctionScalaParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaParametersTraceLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaParametersTraceLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevel">FunctionScalaParametersTraceLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaParametersTraceLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaParametersTraceLevel">FunctionScalaParametersTraceLevel</a>

---


### FunctionScalaSecretsList <a name="FunctionScalaSecretsList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.get"></a>

```go
func Get(index *f64) FunctionScalaSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionScalaSecretsOutputReference <a name="FunctionScalaSecretsOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretVariableNameInput">SecretVariableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretVariableName">SecretVariableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SecretVariableNameInput`<sup>Optional</sup> <a name="SecretVariableNameInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretVariableNameInput"></a>

```go
func SecretVariableNameInput() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretVariableName`<sup>Required</sup> <a name="SecretVariableName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.secretVariableName"></a>

```go
func SecretVariableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FunctionScalaShowOutputList <a name="FunctionScalaShowOutputList" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FunctionScalaShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.get"></a>

```go
func Get(index *f64) FunctionScalaShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FunctionScalaShowOutputOutputReference <a name="FunctionScalaShowOutputOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FunctionScalaShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.argumentsRaw">ArgumentsRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isAggregate">IsAggregate</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isAnsi">IsAnsi</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isBuiltin">IsBuiltin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isDataMetric">IsDataMetric</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isExternalFunction">IsExternalFunction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isMemoizable">IsMemoizable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isSecure">IsSecure</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isTableFunction">IsTableFunction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.maxNumArguments">MaxNumArguments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.minNumArguments">MinNumArguments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.secrets">Secrets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.validForClustering">ValidForClustering</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutput">FunctionScalaShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgumentsRaw`<sup>Required</sup> <a name="ArgumentsRaw" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.argumentsRaw"></a>

```go
func ArgumentsRaw() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *string
```

- *Type:* *string

---

##### `IsAggregate`<sup>Required</sup> <a name="IsAggregate" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isAggregate"></a>

```go
func IsAggregate() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAnsi`<sup>Required</sup> <a name="IsAnsi" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isAnsi"></a>

```go
func IsAnsi() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBuiltin`<sup>Required</sup> <a name="IsBuiltin" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isBuiltin"></a>

```go
func IsBuiltin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDataMetric`<sup>Required</sup> <a name="IsDataMetric" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isDataMetric"></a>

```go
func IsDataMetric() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsExternalFunction`<sup>Required</sup> <a name="IsExternalFunction" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isExternalFunction"></a>

```go
func IsExternalFunction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMemoizable`<sup>Required</sup> <a name="IsMemoizable" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isMemoizable"></a>

```go
func IsMemoizable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isSecure"></a>

```go
func IsSecure() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTableFunction`<sup>Required</sup> <a name="IsTableFunction" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.isTableFunction"></a>

```go
func IsTableFunction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `MaxNumArguments`<sup>Required</sup> <a name="MaxNumArguments" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.maxNumArguments"></a>

```go
func MaxNumArguments() *f64
```

- *Type:* *f64

---

##### `MinNumArguments`<sup>Required</sup> <a name="MinNumArguments" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.minNumArguments"></a>

```go
func MinNumArguments() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.secrets"></a>

```go
func Secrets() *string
```

- *Type:* *string

---

##### `ValidForClustering`<sup>Required</sup> <a name="ValidForClustering" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.validForClustering"></a>

```go
func ValidForClustering() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaShowOutput">FunctionScalaShowOutput</a>

---


### FunctionScalaTargetPathOutputReference <a name="FunctionScalaTargetPathOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaTargetPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionScalaTargetPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.pathOnStageInput">PathOnStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.stageLocationInput">StageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.pathOnStage">PathOnStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.stageLocation">StageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathOnStageInput`<sup>Optional</sup> <a name="PathOnStageInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.pathOnStageInput"></a>

```go
func PathOnStageInput() *string
```

- *Type:* *string

---

##### `StageLocationInput`<sup>Optional</sup> <a name="StageLocationInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.stageLocationInput"></a>

```go
func StageLocationInput() *string
```

- *Type:* *string

---

##### `PathOnStage`<sup>Required</sup> <a name="PathOnStage" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.pathOnStage"></a>

```go
func PathOnStage() *string
```

- *Type:* *string

---

##### `StageLocation`<sup>Required</sup> <a name="StageLocation" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.stageLocation"></a>

```go
func StageLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPathOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionScalaTargetPath
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTargetPath">FunctionScalaTargetPath</a>

---


### FunctionScalaTimeoutsOutputReference <a name="FunctionScalaTimeoutsOutputReference" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/functionscala"

functionscala.NewFunctionScalaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionScalaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionScala.FunctionScalaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



