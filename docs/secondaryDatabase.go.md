# `secondaryDatabase` Submodule <a name="`secondaryDatabase` Submodule" id="@cdktf/provider-snowflake.secondaryDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecondaryDatabase <a name="SecondaryDatabase" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database snowflake_secondary_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/secondarydatabase"

secondarydatabase.NewSecondaryDatabase(scope Construct, id *string, config SecondaryDatabaseConfig) SecondaryDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig">SecondaryDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig">SecondaryDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDefaultDdlCollation">ResetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetEnableConsoleOutput">ResetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetIsTransient">ResetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetMaxDataExtensionTimeInDays">ResetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetQuotedIdentifiersIgnoreCase">ResetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetStorageSerializationPolicy">ResetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetSuspendTaskAfterNumFailures">ResetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTaskAutoRetryAttempts">ResetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskManagedInitialWarehouseSize">ResetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskMinimumTriggerIntervalInSeconds">ResetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskTimeoutMs">ResetUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDataRetentionTimeInDays"></a>

```go
func ResetDataRetentionTimeInDays()
```

##### `ResetDefaultDdlCollation` <a name="ResetDefaultDdlCollation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDefaultDdlCollation"></a>

```go
func ResetDefaultDdlCollation()
```

##### `ResetEnableConsoleOutput` <a name="ResetEnableConsoleOutput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetEnableConsoleOutput"></a>

```go
func ResetEnableConsoleOutput()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetExternalVolume"></a>

```go
func ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTransient` <a name="ResetIsTransient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetIsTransient"></a>

```go
func ResetIsTransient()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMaxDataExtensionTimeInDays` <a name="ResetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetMaxDataExtensionTimeInDays"></a>

```go
func ResetMaxDataExtensionTimeInDays()
```

##### `ResetQuotedIdentifiersIgnoreCase` <a name="ResetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetQuotedIdentifiersIgnoreCase"></a>

```go
func ResetQuotedIdentifiersIgnoreCase()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetStorageSerializationPolicy` <a name="ResetStorageSerializationPolicy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetStorageSerializationPolicy"></a>

```go
func ResetStorageSerializationPolicy()
```

##### `ResetSuspendTaskAfterNumFailures` <a name="ResetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetSuspendTaskAfterNumFailures"></a>

```go
func ResetSuspendTaskAfterNumFailures()
```

##### `ResetTaskAutoRetryAttempts` <a name="ResetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTaskAutoRetryAttempts"></a>

```go
func ResetTaskAutoRetryAttempts()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTraceLevel"></a>

```go
func ResetTraceLevel()
```

##### `ResetUserTaskManagedInitialWarehouseSize` <a name="ResetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskManagedInitialWarehouseSize"></a>

```go
func ResetUserTaskManagedInitialWarehouseSize()
```

##### `ResetUserTaskMinimumTriggerIntervalInSeconds` <a name="ResetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```go
func ResetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `ResetUserTaskTimeoutMs` <a name="ResetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskTimeoutMs"></a>

```go
func ResetUserTaskTimeoutMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecondaryDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/secondarydatabase"

secondarydatabase.SecondaryDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/secondarydatabase"

secondarydatabase.SecondaryDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/secondarydatabase"

secondarydatabase.SecondaryDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/secondarydatabase"

secondarydatabase.SecondaryDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecondaryDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecondaryDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecondaryDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecondaryDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOfInput">AsReplicaOfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollationInput">DefaultDdlCollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutputInput">EnableConsoleOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransientInput">IsTransientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDaysInput">MaxDataExtensionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCaseInput">QuotedIdentifiersIgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicyInput">StorageSerializationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailuresInput">SuspendTaskAfterNumFailuresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttemptsInput">TaskAutoRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevelInput">TraceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSizeInput">UserTaskManagedInitialWarehouseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput">UserTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMsInput">UserTaskTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOf">AsReplicaOf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransient">IsTransient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `AsReplicaOfInput`<sup>Optional</sup> <a name="AsReplicaOfInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOfInput"></a>

```go
func AsReplicaOfInput() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDaysInput"></a>

```go
func DataRetentionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `DefaultDdlCollationInput`<sup>Optional</sup> <a name="DefaultDdlCollationInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollationInput"></a>

```go
func DefaultDdlCollationInput() *string
```

- *Type:* *string

---

##### `EnableConsoleOutputInput`<sup>Optional</sup> <a name="EnableConsoleOutputInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutputInput"></a>

```go
func EnableConsoleOutputInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolumeInput"></a>

```go
func ExternalVolumeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTransientInput`<sup>Optional</sup> <a name="IsTransientInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransientInput"></a>

```go
func IsTransientInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MaxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDaysInput"></a>

```go
func MaxDataExtensionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCaseInput"></a>

```go
func QuotedIdentifiersIgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `StorageSerializationPolicyInput`<sup>Optional</sup> <a name="StorageSerializationPolicyInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicyInput"></a>

```go
func StorageSerializationPolicyInput() *string
```

- *Type:* *string

---

##### `SuspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailuresInput"></a>

```go
func SuspendTaskAfterNumFailuresInput() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="TaskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttemptsInput"></a>

```go
func TaskAutoRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevelInput"></a>

```go
func TraceLevelInput() *string
```

- *Type:* *string

---

##### `UserTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSizeInput"></a>

```go
func UserTaskManagedInitialWarehouseSizeInput() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```go
func UserTaskMinimumTriggerIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMsInput`<sup>Optional</sup> <a name="UserTaskTimeoutMsInput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMsInput"></a>

```go
func UserTaskTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `AsReplicaOf`<sup>Required</sup> <a name="AsReplicaOf" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOf"></a>

```go
func AsReplicaOf() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDays"></a>

```go
func DataRetentionTimeInDays() *f64
```

- *Type:* *f64

---

##### `DefaultDdlCollation`<sup>Required</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollation"></a>

```go
func DefaultDdlCollation() *string
```

- *Type:* *string

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutput"></a>

```go
func EnableConsoleOutput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTransient`<sup>Required</sup> <a name="IsTransient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransient"></a>

```go
func IsTransient() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDays"></a>

```go
func MaxDataExtensionTimeInDays() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCase"></a>

```go
func QuotedIdentifiersIgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() interface{}
```

- *Type:* interface{}

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicy"></a>

```go
func StorageSerializationPolicy() *string
```

- *Type:* *string

---

##### `SuspendTaskAfterNumFailures`<sup>Required</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailures"></a>

```go
func SuspendTaskAfterNumFailures() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttempts`<sup>Required</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttempts"></a>

```go
func TaskAutoRetryAttempts() *f64
```

- *Type:* *f64

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevel"></a>

```go
func TraceLevel() *string
```

- *Type:* *string

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSize"></a>

```go
func UserTaskManagedInitialWarehouseSize() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
func UserTaskMinimumTriggerIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMs`<sup>Required</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMs"></a>

```go
func UserTaskTimeoutMs() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecondaryDatabaseConfig <a name="SecondaryDatabaseConfig" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/secondarydatabase"

&secondarydatabase.SecondaryDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AsReplicaOf: *string,
	Name: *string,
	Catalog: *string,
	Comment: *string,
	DataRetentionTimeInDays: *f64,
	DefaultDdlCollation: *string,
	EnableConsoleOutput: interface{},
	ExternalVolume: *string,
	Id: *string,
	IsTransient: interface{},
	LogLevel: *string,
	MaxDataExtensionTimeInDays: *f64,
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
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.asReplicaOf">AsReplicaOf</a></code> | <code>*string</code> | A fully qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.catalog">Catalog</a></code> | <code>*string</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#id SecondaryDatabase#id}. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.isTransient">IsTransient</a></code> | <code>interface{}</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AsReplicaOf`<sup>Required</sup> <a name="AsReplicaOf" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.asReplicaOf"></a>

```go
AsReplicaOf *string
```

- *Type:* *string

A fully qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<database_name>"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#as_replica_of SecondaryDatabase#as_replica_of}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#name SecondaryDatabase#name}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#catalog SecondaryDatabase#catalog}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#comment SecondaryDatabase#comment}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dataRetentionTimeInDays"></a>

```go
DataRetentionTimeInDays *f64
```

- *Type:* *f64

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#data_retention_time_in_days SecondaryDatabase#data_retention_time_in_days}

---

##### `DefaultDdlCollation`<sup>Optional</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.defaultDdlCollation"></a>

```go
DefaultDdlCollation *string
```

- *Type:* *string

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#default_ddl_collation SecondaryDatabase#default_ddl_collation}

---

##### `EnableConsoleOutput`<sup>Optional</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.enableConsoleOutput"></a>

```go
EnableConsoleOutput interface{}
```

- *Type:* interface{}

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#enable_console_output SecondaryDatabase#enable_console_output}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.externalVolume"></a>

```go
ExternalVolume *string
```

- *Type:* *string

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#external_volume SecondaryDatabase#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#id SecondaryDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTransient`<sup>Optional</sup> <a name="IsTransient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.isTransient"></a>

```go
IsTransient interface{}
```

- *Type:* interface{}

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#is_transient SecondaryDatabase#is_transient}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#log_level SecondaryDatabase#log_level}

---

##### `MaxDataExtensionTimeInDays`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.maxDataExtensionTimeInDays"></a>

```go
MaxDataExtensionTimeInDays *f64
```

- *Type:* *f64

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#max_data_extension_time_in_days SecondaryDatabase#max_data_extension_time_in_days}

---

##### `QuotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```go
QuotedIdentifiersIgnoreCase interface{}
```

- *Type:* interface{}

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#quoted_identifiers_ignore_case SecondaryDatabase#quoted_identifiers_ignore_case}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters interface{}
```

- *Type:* interface{}

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#replace_invalid_characters SecondaryDatabase#replace_invalid_characters}

---

##### `StorageSerializationPolicy`<sup>Optional</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.storageSerializationPolicy"></a>

```go
StorageSerializationPolicy *string
```

- *Type:* *string

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#storage_serialization_policy SecondaryDatabase#storage_serialization_policy}

---

##### `SuspendTaskAfterNumFailures`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```go
SuspendTaskAfterNumFailures *f64
```

- *Type:* *f64

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#suspend_task_after_num_failures SecondaryDatabase#suspend_task_after_num_failures}

---

##### `TaskAutoRetryAttempts`<sup>Optional</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.taskAutoRetryAttempts"></a>

```go
TaskAutoRetryAttempts *f64
```

- *Type:* *f64

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#task_auto_retry_attempts SecondaryDatabase#task_auto_retry_attempts}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.traceLevel"></a>

```go
TraceLevel *string
```

- *Type:* *string

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#trace_level SecondaryDatabase#trace_level}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```go
UserTaskManagedInitialWarehouseSize *string
```

- *Type:* *string

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#user_task_managed_initial_warehouse_size SecondaryDatabase#user_task_managed_initial_warehouse_size}

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
UserTaskMinimumTriggerIntervalInSeconds *f64
```

- *Type:* *f64

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#user_task_minimum_trigger_interval_in_seconds SecondaryDatabase#user_task_minimum_trigger_interval_in_seconds}

---

##### `UserTaskTimeoutMs`<sup>Optional</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskTimeoutMs"></a>

```go
UserTaskTimeoutMs *f64
```

- *Type:* *f64

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/resources/secondary_database#user_task_timeout_ms SecondaryDatabase#user_task_timeout_ms}

---



