# `sharedDatabase` Submodule <a name="`sharedDatabase` Submodule" id="@cdktf/provider-snowflake.sharedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedDatabase <a name="SharedDatabase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database snowflake_shared_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/shareddatabase"

shareddatabase.NewSharedDatabase(scope Construct, id *string, config SharedDatabaseConfig) SharedDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig">SharedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig">SharedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetDefaultDdlCollation">ResetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetEnableConsoleOutput">ResetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetQuotedIdentifiersIgnoreCase">ResetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetStorageSerializationPolicy">ResetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetSuspendTaskAfterNumFailures">ResetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTaskAutoRetryAttempts">ResetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskManagedInitialWarehouseSize">ResetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskMinimumTriggerIntervalInSeconds">ResetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskTimeoutMs">ResetUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDefaultDdlCollation` <a name="ResetDefaultDdlCollation" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetDefaultDdlCollation"></a>

```go
func ResetDefaultDdlCollation()
```

##### `ResetEnableConsoleOutput` <a name="ResetEnableConsoleOutput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetEnableConsoleOutput"></a>

```go
func ResetEnableConsoleOutput()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetExternalVolume"></a>

```go
func ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetQuotedIdentifiersIgnoreCase` <a name="ResetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetQuotedIdentifiersIgnoreCase"></a>

```go
func ResetQuotedIdentifiersIgnoreCase()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetStorageSerializationPolicy` <a name="ResetStorageSerializationPolicy" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetStorageSerializationPolicy"></a>

```go
func ResetStorageSerializationPolicy()
```

##### `ResetSuspendTaskAfterNumFailures` <a name="ResetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetSuspendTaskAfterNumFailures"></a>

```go
func ResetSuspendTaskAfterNumFailures()
```

##### `ResetTaskAutoRetryAttempts` <a name="ResetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTaskAutoRetryAttempts"></a>

```go
func ResetTaskAutoRetryAttempts()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTraceLevel"></a>

```go
func ResetTraceLevel()
```

##### `ResetUserTaskManagedInitialWarehouseSize` <a name="ResetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskManagedInitialWarehouseSize"></a>

```go
func ResetUserTaskManagedInitialWarehouseSize()
```

##### `ResetUserTaskMinimumTriggerIntervalInSeconds` <a name="ResetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```go
func ResetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `ResetUserTaskTimeoutMs` <a name="ResetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskTimeoutMs"></a>

```go
func ResetUserTaskTimeoutMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SharedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/shareddatabase"

shareddatabase.SharedDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/shareddatabase"

shareddatabase.SharedDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/shareddatabase"

shareddatabase.SharedDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/shareddatabase"

shareddatabase.SharedDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SharedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SharedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SharedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SharedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollationInput">DefaultDdlCollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutputInput">EnableConsoleOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShareInput">FromShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCaseInput">QuotedIdentifiersIgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicyInput">StorageSerializationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailuresInput">SuspendTaskAfterNumFailuresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttemptsInput">TaskAutoRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevelInput">TraceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSizeInput">UserTaskManagedInitialWarehouseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput">UserTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMsInput">UserTaskTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShare">FromShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DefaultDdlCollationInput`<sup>Optional</sup> <a name="DefaultDdlCollationInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollationInput"></a>

```go
func DefaultDdlCollationInput() *string
```

- *Type:* *string

---

##### `EnableConsoleOutputInput`<sup>Optional</sup> <a name="EnableConsoleOutputInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutputInput"></a>

```go
func EnableConsoleOutputInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolumeInput"></a>

```go
func ExternalVolumeInput() *string
```

- *Type:* *string

---

##### `FromShareInput`<sup>Optional</sup> <a name="FromShareInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShareInput"></a>

```go
func FromShareInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCaseInput"></a>

```go
func QuotedIdentifiersIgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `StorageSerializationPolicyInput`<sup>Optional</sup> <a name="StorageSerializationPolicyInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicyInput"></a>

```go
func StorageSerializationPolicyInput() *string
```

- *Type:* *string

---

##### `SuspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailuresInput"></a>

```go
func SuspendTaskAfterNumFailuresInput() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="TaskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttemptsInput"></a>

```go
func TaskAutoRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevelInput"></a>

```go
func TraceLevelInput() *string
```

- *Type:* *string

---

##### `UserTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSizeInput"></a>

```go
func UserTaskManagedInitialWarehouseSizeInput() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```go
func UserTaskMinimumTriggerIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMsInput`<sup>Optional</sup> <a name="UserTaskTimeoutMsInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMsInput"></a>

```go
func UserTaskTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DefaultDdlCollation`<sup>Required</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollation"></a>

```go
func DefaultDdlCollation() *string
```

- *Type:* *string

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutput"></a>

```go
func EnableConsoleOutput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `FromShare`<sup>Required</sup> <a name="FromShare" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShare"></a>

```go
func FromShare() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCase"></a>

```go
func QuotedIdentifiersIgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() interface{}
```

- *Type:* interface{}

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicy"></a>

```go
func StorageSerializationPolicy() *string
```

- *Type:* *string

---

##### `SuspendTaskAfterNumFailures`<sup>Required</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailures"></a>

```go
func SuspendTaskAfterNumFailures() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttempts`<sup>Required</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttempts"></a>

```go
func TaskAutoRetryAttempts() *f64
```

- *Type:* *f64

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevel"></a>

```go
func TraceLevel() *string
```

- *Type:* *string

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSize"></a>

```go
func UserTaskManagedInitialWarehouseSize() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
func UserTaskMinimumTriggerIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMs`<sup>Required</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMs"></a>

```go
func UserTaskTimeoutMs() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedDatabaseConfig <a name="SharedDatabaseConfig" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/shareddatabase"

&shareddatabase.SharedDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FromShare: *string,
	Name: *string,
	Catalog: *string,
	Comment: *string,
	DefaultDdlCollation: *string,
	EnableConsoleOutput: interface{},
	ExternalVolume: *string,
	Id: *string,
	LogLevel: *string,
	QuotedIdentifiersIgnoreCase: interface{},
	ReplaceInvalidCharacters: interface{},
	StorageSerializationPolicy: *string,
	SuspendTaskAfterNumFailures: *f64,
	TaskAutoRetryAttempts: *f64,
	TraceLevel: *string,
	UserTaskManagedInitialWarehouseSize: *string,
	UserTaskMinimumTriggerIntervalInSeconds: *f64,
	UserTaskTimeoutMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.fromShare">FromShare</a></code> | <code>*string</code> | A fully qualified path to a share from which the database will be created. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the database; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.catalog">Catalog</a></code> | <code>*string</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#id SharedDatabase#id}. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FromShare`<sup>Required</sup> <a name="FromShare" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.fromShare"></a>

```go
FromShare *string
```

- *Type:* *string

A fully qualified path to a share from which the database will be created.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<share_name>"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#from_share SharedDatabase#from_share}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the database; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#name SharedDatabase#name}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#catalog SharedDatabase#catalog}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#comment SharedDatabase#comment}

---

##### `DefaultDdlCollation`<sup>Optional</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.defaultDdlCollation"></a>

```go
DefaultDdlCollation *string
```

- *Type:* *string

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#default_ddl_collation SharedDatabase#default_ddl_collation}

---

##### `EnableConsoleOutput`<sup>Optional</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.enableConsoleOutput"></a>

```go
EnableConsoleOutput interface{}
```

- *Type:* interface{}

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#enable_console_output SharedDatabase#enable_console_output}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.externalVolume"></a>

```go
ExternalVolume *string
```

- *Type:* *string

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#external_volume SharedDatabase#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#id SharedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#log_level SharedDatabase#log_level}

---

##### `QuotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```go
QuotedIdentifiersIgnoreCase interface{}
```

- *Type:* interface{}

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#quoted_identifiers_ignore_case SharedDatabase#quoted_identifiers_ignore_case}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters interface{}
```

- *Type:* interface{}

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#replace_invalid_characters SharedDatabase#replace_invalid_characters}

---

##### `StorageSerializationPolicy`<sup>Optional</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.storageSerializationPolicy"></a>

```go
StorageSerializationPolicy *string
```

- *Type:* *string

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#storage_serialization_policy SharedDatabase#storage_serialization_policy}

---

##### `SuspendTaskAfterNumFailures`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```go
SuspendTaskAfterNumFailures *f64
```

- *Type:* *f64

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#suspend_task_after_num_failures SharedDatabase#suspend_task_after_num_failures}

---

##### `TaskAutoRetryAttempts`<sup>Optional</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.taskAutoRetryAttempts"></a>

```go
TaskAutoRetryAttempts *f64
```

- *Type:* *f64

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#task_auto_retry_attempts SharedDatabase#task_auto_retry_attempts}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.traceLevel"></a>

```go
TraceLevel *string
```

- *Type:* *string

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#trace_level SharedDatabase#trace_level}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```go
UserTaskManagedInitialWarehouseSize *string
```

- *Type:* *string

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#user_task_managed_initial_warehouse_size SharedDatabase#user_task_managed_initial_warehouse_size}

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
UserTaskMinimumTriggerIntervalInSeconds *f64
```

- *Type:* *f64

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#user_task_minimum_trigger_interval_in_seconds SharedDatabase#user_task_minimum_trigger_interval_in_seconds}

---

##### `UserTaskTimeoutMs`<sup>Optional</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskTimeoutMs"></a>

```go
UserTaskTimeoutMs *f64
```

- *Type:* *f64

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/shared_database#user_task_timeout_ms SharedDatabase#user_task_timeout_ms}

---



