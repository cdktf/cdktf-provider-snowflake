# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-snowflake.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-snowflake.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database snowflake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.Database.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.NewDatabase(scope Construct, id *string, config DatabaseConfig) Database
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig">DatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseConfig">DatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putReplication">PutReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation">ResetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation">ResetDropPublicSchemaOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput">ResetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetIsTransient">ResetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays">ResetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase">ResetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplication">ResetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy">ResetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures">ResetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts">ResetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize">ResetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds">ResetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs">ResetUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.database.Database.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.database.Database.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.database.Database.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.database.Database.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.database.Database.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.database.Database.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.database.Database.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.database.Database.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.database.Database.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.database.Database.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.database.Database.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplication` <a name="PutReplication" id="@cdktf/provider-snowflake.database.Database.putReplication"></a>

```go
func PutReplication(value DatabaseReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.database.Database.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-snowflake.database.Database.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.database.Database.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays"></a>

```go
func ResetDataRetentionTimeInDays()
```

##### `ResetDefaultDdlCollation` <a name="ResetDefaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation"></a>

```go
func ResetDefaultDdlCollation()
```

##### `ResetDropPublicSchemaOnCreation` <a name="ResetDropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation"></a>

```go
func ResetDropPublicSchemaOnCreation()
```

##### `ResetEnableConsoleOutput` <a name="ResetEnableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput"></a>

```go
func ResetEnableConsoleOutput()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktf/provider-snowflake.database.Database.resetExternalVolume"></a>

```go
func ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.database.Database.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTransient` <a name="ResetIsTransient" id="@cdktf/provider-snowflake.database.Database.resetIsTransient"></a>

```go
func ResetIsTransient()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.database.Database.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMaxDataExtensionTimeInDays` <a name="ResetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays"></a>

```go
func ResetMaxDataExtensionTimeInDays()
```

##### `ResetQuotedIdentifiersIgnoreCase` <a name="ResetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase"></a>

```go
func ResetQuotedIdentifiersIgnoreCase()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetReplication` <a name="ResetReplication" id="@cdktf/provider-snowflake.database.Database.resetReplication"></a>

```go
func ResetReplication()
```

##### `ResetStorageSerializationPolicy` <a name="ResetStorageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy"></a>

```go
func ResetStorageSerializationPolicy()
```

##### `ResetSuspendTaskAfterNumFailures` <a name="ResetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures"></a>

```go
func ResetSuspendTaskAfterNumFailures()
```

##### `ResetTaskAutoRetryAttempts` <a name="ResetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts"></a>

```go
func ResetTaskAutoRetryAttempts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.database.Database.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.database.Database.resetTraceLevel"></a>

```go
func ResetTraceLevel()
```

##### `ResetUserTaskManagedInitialWarehouseSize` <a name="ResetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize"></a>

```go
func ResetUserTaskManagedInitialWarehouseSize()
```

##### `ResetUserTaskMinimumTriggerIntervalInSeconds` <a name="ResetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```go
func ResetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `ResetUserTaskTimeoutMs` <a name="ResetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs"></a>

```go
func ResetUserTaskTimeoutMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.database.Database.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.Database_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.database.Database.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.Database_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.database.Database.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.Database_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.Database_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Database to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference">DatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput">DefaultDdlCollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput">DropPublicSchemaOnCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput">EnableConsoleOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransientInput">IsTransientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput">MaxDataExtensionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput">QuotedIdentifiersIgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationInput">ReplicationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput">StorageSerializationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput">SuspendTaskAfterNumFailuresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput">TaskAutoRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevelInput">TraceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput">UserTaskManagedInitialWarehouseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput">UserTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput">UserTaskTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation">DropPublicSchemaOnCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransient">IsTransient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.database.Database.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.database.Database.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.database.Database.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.database.Database.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.database.Database.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.database.Database.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.database.Database.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.database.Database.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.database.Database.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.database.Database.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.database.Database.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-snowflake.database.Database.property.replication"></a>

```go
func Replication() DatabaseReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.database.Database.property.timeouts"></a>

```go
func Timeouts() DatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference">DatabaseTimeoutsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-snowflake.database.Database.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.database.Database.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput"></a>

```go
func DataRetentionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `DefaultDdlCollationInput`<sup>Optional</sup> <a name="DefaultDdlCollationInput" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput"></a>

```go
func DefaultDdlCollationInput() *string
```

- *Type:* *string

---

##### `DropPublicSchemaOnCreationInput`<sup>Optional</sup> <a name="DropPublicSchemaOnCreationInput" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput"></a>

```go
func DropPublicSchemaOnCreationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableConsoleOutputInput`<sup>Optional</sup> <a name="EnableConsoleOutputInput" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput"></a>

```go
func EnableConsoleOutputInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktf/provider-snowflake.database.Database.property.externalVolumeInput"></a>

```go
func ExternalVolumeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.database.Database.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTransientInput`<sup>Optional</sup> <a name="IsTransientInput" id="@cdktf/provider-snowflake.database.Database.property.isTransientInput"></a>

```go
func IsTransientInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.database.Database.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MaxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput"></a>

```go
func MaxDataExtensionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.database.Database.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput"></a>

```go
func QuotedIdentifiersIgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktf/provider-snowflake.database.Database.property.replicationInput"></a>

```go
func ReplicationInput() DatabaseReplication
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `StorageSerializationPolicyInput`<sup>Optional</sup> <a name="StorageSerializationPolicyInput" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput"></a>

```go
func StorageSerializationPolicyInput() *string
```

- *Type:* *string

---

##### `SuspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput"></a>

```go
func SuspendTaskAfterNumFailuresInput() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="TaskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput"></a>

```go
func TaskAutoRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.database.Database.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.database.Database.property.traceLevelInput"></a>

```go
func TraceLevelInput() *string
```

- *Type:* *string

---

##### `UserTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput"></a>

```go
func UserTaskManagedInitialWarehouseSizeInput() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```go
func UserTaskMinimumTriggerIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMsInput`<sup>Optional</sup> <a name="UserTaskTimeoutMsInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput"></a>

```go
func UserTaskTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-snowflake.database.Database.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.database.Database.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays"></a>

```go
func DataRetentionTimeInDays() *f64
```

- *Type:* *f64

---

##### `DefaultDdlCollation`<sup>Required</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation"></a>

```go
func DefaultDdlCollation() *string
```

- *Type:* *string

---

##### `DropPublicSchemaOnCreation`<sup>Required</sup> <a name="DropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation"></a>

```go
func DropPublicSchemaOnCreation() interface{}
```

- *Type:* interface{}

---

##### `EnableConsoleOutput`<sup>Required</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput"></a>

```go
func EnableConsoleOutput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.database.Database.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.database.Database.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTransient`<sup>Required</sup> <a name="IsTransient" id="@cdktf/provider-snowflake.database.Database.property.isTransient"></a>

```go
func IsTransient() interface{}
```

- *Type:* interface{}

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.database.Database.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays"></a>

```go
func MaxDataExtensionTimeInDays() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.database.Database.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase"></a>

```go
func QuotedIdentifiersIgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() interface{}
```

- *Type:* interface{}

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy"></a>

```go
func StorageSerializationPolicy() *string
```

- *Type:* *string

---

##### `SuspendTaskAfterNumFailures`<sup>Required</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures"></a>

```go
func SuspendTaskAfterNumFailures() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttempts`<sup>Required</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts"></a>

```go
func TaskAutoRetryAttempts() *f64
```

- *Type:* *f64

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.database.Database.property.traceLevel"></a>

```go
func TraceLevel() *string
```

- *Type:* *string

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize"></a>

```go
func UserTaskManagedInitialWarehouseSize() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
func UserTaskMinimumTriggerIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMs`<sup>Required</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs"></a>

```go
func UserTaskTimeoutMs() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.database.Database.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-snowflake.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

&database.DatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Catalog: *string,
	Comment: *string,
	DataRetentionTimeInDays: *f64,
	DefaultDdlCollation: *string,
	DropPublicSchemaOnCreation: interface{},
	EnableConsoleOutput: interface{},
	ExternalVolume: *string,
	Id: *string,
	IsTransient: interface{},
	LogLevel: *string,
	MaxDataExtensionTimeInDays: *f64,
	QuotedIdentifiersIgnoreCase: interface{},
	ReplaceInvalidCharacters: interface{},
	Replication: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.database.DatabaseReplication,
	StorageSerializationPolicy: *string,
	SuspendTaskAfterNumFailures: *f64,
	TaskAutoRetryAttempts: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.database.DatabaseTimeouts,
	TraceLevel: *string,
	UserTaskManagedInitialWarehouseSize: *string,
	UserTaskMinimumTriggerIntervalInSeconds: *f64,
	UserTaskTimeoutMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog">Catalog</a></code> | <code>*string</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation">DropPublicSchemaOnCreation</a></code> | <code>interface{}</code> | Specifies whether to drop public schema on creation or not. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput">EnableConsoleOutput</a></code> | <code>interface{}</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient">IsTransient</a></code> | <code>interface{}</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#name Database#name}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#catalog Database#catalog}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#comment Database#comment}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays"></a>

```go
DataRetentionTimeInDays *f64
```

- *Type:* *f64

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `DefaultDdlCollation`<sup>Optional</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation"></a>

```go
DefaultDdlCollation *string
```

- *Type:* *string

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}

---

##### `DropPublicSchemaOnCreation`<sup>Optional</sup> <a name="DropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation"></a>

```go
DropPublicSchemaOnCreation interface{}
```

- *Type:* interface{}

Specifies whether to drop public schema on creation or not.

Modifying the parameter after database is already created won't have any effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}

---

##### `EnableConsoleOutput`<sup>Optional</sup> <a name="EnableConsoleOutput" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput"></a>

```go
EnableConsoleOutput interface{}
```

- *Type:* interface{}

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#enable_console_output Database#enable_console_output}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume"></a>

```go
ExternalVolume *string
```

- *Type:* *string

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#external_volume Database#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTransient`<sup>Optional</sup> <a name="IsTransient" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient"></a>

```go
IsTransient interface{}
```

- *Type:* interface{}

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#is_transient Database#is_transient}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#log_level Database#log_level}

---

##### `MaxDataExtensionTimeInDays`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays"></a>

```go
MaxDataExtensionTimeInDays *f64
```

- *Type:* *f64

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}

---

##### `QuotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```go
QuotedIdentifiersIgnoreCase interface{}
```

- *Type:* interface{}

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters interface{}
```

- *Type:* interface{}

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}

---

##### `Replication`<sup>Optional</sup> <a name="Replication" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replication"></a>

```go
Replication DatabaseReplication
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#replication Database#replication}

---

##### `StorageSerializationPolicy`<sup>Optional</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy"></a>

```go
StorageSerializationPolicy *string
```

- *Type:* *string

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}

---

##### `SuspendTaskAfterNumFailures`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```go
SuspendTaskAfterNumFailures *f64
```

- *Type:* *f64

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}

---

##### `TaskAutoRetryAttempts`<sup>Optional</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts"></a>

```go
TaskAutoRetryAttempts *f64
```

- *Type:* *f64

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.timeouts"></a>

```go
Timeouts DatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#timeouts Database#timeouts}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel"></a>

```go
TraceLevel *string
```

- *Type:* *string

Controls how trace events are ingested into the event table.

Valid options are: `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#trace_level Database#trace_level}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```go
UserTaskManagedInitialWarehouseSize *string
```

- *Type:* *string

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
UserTaskMinimumTriggerIntervalInSeconds *f64
```

- *Type:* *f64

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}

---

##### `UserTaskTimeoutMs`<sup>Optional</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs"></a>

```go
UserTaskTimeoutMs *f64
```

- *Type:* *f64

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}

---

### DatabaseReplication <a name="DatabaseReplication" id="@cdktf/provider-snowflake.database.DatabaseReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

&database.DatabaseReplication {
	EnableToAccount: interface{},
	IgnoreEditionCheck: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount">EnableToAccount</a></code> | <code>interface{}</code> | enable_to_account block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>interface{}</code> | Allows replicating data to accounts on lower editions in either of the following scenarios: 1. |

---

##### `EnableToAccount`<sup>Required</sup> <a name="EnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount"></a>

```go
EnableToAccount interface{}
```

- *Type:* interface{}

enable_to_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#enable_to_account Database#enable_to_account}

---

##### `IgnoreEditionCheck`<sup>Optional</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck"></a>

```go
IgnoreEditionCheck interface{}
```

- *Type:* interface{}

Allows replicating data to accounts on lower editions in either of the following scenarios: 1.

The primary database is in a Business Critical (or higher) account but one or more of the accounts approved for replication are on lower editions. Business Critical Edition is intended for Snowflake accounts with extremely sensitive data. 2. The primary database is in a Business Critical (or higher) account and a signed business associate agreement is in place to store PHI data in the account per HIPAA and HITRUST regulations, but no such agreement is in place for one or more of the accounts approved for replication, regardless if they are Business Critical (or higher) accounts. Both scenarios are prohibited by default in an effort to help prevent account administrators for Business Critical (or higher) accounts from inadvertently replicating sensitive data to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}

---

### DatabaseReplicationEnableToAccount <a name="DatabaseReplicationEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

&database.DatabaseReplicationEnableToAccount {
	AccountIdentifier: *string,
	WithFailover: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | Specifies account identifier for which replication should be enabled. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover">WithFailover</a></code> | <code>interface{}</code> | Specifies if failover should be enabled for the specified account identifier. |

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier"></a>

```go
AccountIdentifier *string
```

- *Type:* *string

Specifies account identifier for which replication should be enabled.

The account identifiers should be in the form of `"<organization_name>"."<account_name>"`. For more information about this resource, see [docs](./account).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#account_identifier Database#account_identifier}

---

##### `WithFailover`<sup>Optional</sup> <a name="WithFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover"></a>

```go
WithFailover interface{}
```

- *Type:* interface{}

Specifies if failover should be enabled for the specified account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#with_failover Database#with_failover}

---

### DatabaseTimeouts <a name="DatabaseTimeouts" id="@cdktf/provider-snowflake.database.DatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

&database.DatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#create Database#create}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#delete Database#delete}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#read Database#read}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#update Database#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#create Database#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#delete Database#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#read Database#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/database#update Database#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseReplicationEnableToAccountList <a name="DatabaseReplicationEnableToAccountList" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.NewDatabaseReplicationEnableToAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseReplicationEnableToAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get"></a>

```go
func Get(index *f64) DatabaseReplicationEnableToAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseReplicationEnableToAccountOutputReference <a name="DatabaseReplicationEnableToAccountOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.NewDatabaseReplicationEnableToAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseReplicationEnableToAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover">ResetWithFailover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWithFailover` <a name="ResetWithFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover"></a>

```go
func ResetWithFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput">WithFailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover">WithFailover</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput"></a>

```go
func AccountIdentifierInput() *string
```

- *Type:* *string

---

##### `WithFailoverInput`<sup>Optional</sup> <a name="WithFailoverInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput"></a>

```go
func WithFailoverInput() interface{}
```

- *Type:* interface{}

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier"></a>

```go
func AccountIdentifier() *string
```

- *Type:* *string

---

##### `WithFailover`<sup>Required</sup> <a name="WithFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover"></a>

```go
func WithFailover() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseReplicationOutputReference <a name="DatabaseReplicationOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.NewDatabaseReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount">PutEnableToAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck">ResetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnableToAccount` <a name="PutEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount"></a>

```go
func PutEnableToAccount(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIgnoreEditionCheck` <a name="ResetIgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck"></a>

```go
func ResetIgnoreEditionCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount">EnableToAccount</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput">EnableToAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput">IgnoreEditionCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableToAccount`<sup>Required</sup> <a name="EnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount"></a>

```go
func EnableToAccount() DatabaseReplicationEnableToAccountList
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a>

---

##### `EnableToAccountInput`<sup>Optional</sup> <a name="EnableToAccountInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput"></a>

```go
func EnableToAccountInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreEditionCheckInput`<sup>Optional</sup> <a name="IgnoreEditionCheckInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput"></a>

```go
func IgnoreEditionCheckInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreEditionCheck`<sup>Required</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck"></a>

```go
func IgnoreEditionCheck() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseReplication
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---


### DatabaseTimeoutsOutputReference <a name="DatabaseTimeoutsOutputReference" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/database"

database.NewDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



