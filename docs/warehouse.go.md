# `warehouse` Submodule <a name="`warehouse` Submodule" id="@cdktf/provider-snowflake.warehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Warehouse <a name="Warehouse" id="@cdktf/provider-snowflake.warehouse.Warehouse"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse snowflake_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouse(scope Construct, id *string, config WarehouseConfig) Warehouse
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig">WarehouseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig">WarehouseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoResume">ResetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoSuspend">ResetAutoSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetEnableQueryAcceleration">ResetEnableQueryAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetInitiallySuspended">ResetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxClusterCount">ResetMaxClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxConcurrencyLevel">ResetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMinClusterCount">ResetMinClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetQueryAccelerationMaxScaleFactor">ResetQueryAccelerationMaxScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetResourceMonitor">ResetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetScalingPolicy">ResetScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementQueuedTimeoutInSeconds">ResetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementTimeoutInSeconds">ResetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseSize">ResetWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseType">ResetWarehouseType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.Warehouse.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.warehouse.Warehouse.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.warehouse.Warehouse.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.warehouse.Warehouse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.warehouse.Warehouse.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.warehouse.Warehouse.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.Warehouse.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoResume` <a name="ResetAutoResume" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoResume"></a>

```go
func ResetAutoResume()
```

##### `ResetAutoSuspend` <a name="ResetAutoSuspend" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoSuspend"></a>

```go
func ResetAutoSuspend()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetComment"></a>

```go
func ResetComment()
```

##### `ResetEnableQueryAcceleration` <a name="ResetEnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetEnableQueryAcceleration"></a>

```go
func ResetEnableQueryAcceleration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetId"></a>

```go
func ResetId()
```

##### `ResetInitiallySuspended` <a name="ResetInitiallySuspended" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetInitiallySuspended"></a>

```go
func ResetInitiallySuspended()
```

##### `ResetMaxClusterCount` <a name="ResetMaxClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxClusterCount"></a>

```go
func ResetMaxClusterCount()
```

##### `ResetMaxConcurrencyLevel` <a name="ResetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxConcurrencyLevel"></a>

```go
func ResetMaxConcurrencyLevel()
```

##### `ResetMinClusterCount` <a name="ResetMinClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMinClusterCount"></a>

```go
func ResetMinClusterCount()
```

##### `ResetQueryAccelerationMaxScaleFactor` <a name="ResetQueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetQueryAccelerationMaxScaleFactor"></a>

```go
func ResetQueryAccelerationMaxScaleFactor()
```

##### `ResetResourceMonitor` <a name="ResetResourceMonitor" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetResourceMonitor"></a>

```go
func ResetResourceMonitor()
```

##### `ResetScalingPolicy` <a name="ResetScalingPolicy" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetScalingPolicy"></a>

```go
func ResetScalingPolicy()
```

##### `ResetStatementQueuedTimeoutInSeconds` <a name="ResetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementQueuedTimeoutInSeconds"></a>

```go
func ResetStatementQueuedTimeoutInSeconds()
```

##### `ResetStatementTimeoutInSeconds` <a name="ResetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementTimeoutInSeconds"></a>

```go
func ResetStatementTimeoutInSeconds()
```

##### `ResetWarehouseSize` <a name="ResetWarehouseSize" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseSize"></a>

```go
func ResetWarehouseSize()
```

##### `ResetWarehouseType` <a name="ResetWarehouseType" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseType"></a>

```go
func ResetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Warehouse resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.Warehouse_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.Warehouse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.Warehouse_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.Warehouse_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Warehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Warehouse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Warehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Warehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList">WarehouseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList">WarehouseShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput">AutoResumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput">AutoSuspendInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput">EnableQueryAccelerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspendedInput">InitiallySuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCountInput">MaxClusterCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevelInput">MaxConcurrencyLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCountInput">MinClusterCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactorInput">QueryAccelerationMaxScaleFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitorInput">ResourceMonitorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicyInput">ScalingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSecondsInput">StatementQueuedTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSecondsInput">StatementTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput">WarehouseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput">WarehouseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume">AutoResume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend">AutoSuspend</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspended">InitiallySuspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCount">MaxClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCount">MinClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactor">QueryAccelerationMaxScaleFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitor">ResourceMonitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicy">ScalingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSize">WarehouseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.parameters"></a>

```go
func Parameters() WarehouseParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList">WarehouseParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.showOutput"></a>

```go
func ShowOutput() WarehouseShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList">WarehouseShowOutputList</a>

---

##### `AutoResumeInput`<sup>Optional</sup> <a name="AutoResumeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput"></a>

```go
func AutoResumeInput() *string
```

- *Type:* *string

---

##### `AutoSuspendInput`<sup>Optional</sup> <a name="AutoSuspendInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput"></a>

```go
func AutoSuspendInput() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnableQueryAccelerationInput`<sup>Optional</sup> <a name="EnableQueryAccelerationInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput"></a>

```go
func EnableQueryAccelerationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitiallySuspendedInput`<sup>Optional</sup> <a name="InitiallySuspendedInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspendedInput"></a>

```go
func InitiallySuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `MaxClusterCountInput`<sup>Optional</sup> <a name="MaxClusterCountInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCountInput"></a>

```go
func MaxClusterCountInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrencyLevelInput`<sup>Optional</sup> <a name="MaxConcurrencyLevelInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevelInput"></a>

```go
func MaxConcurrencyLevelInput() *f64
```

- *Type:* *f64

---

##### `MinClusterCountInput`<sup>Optional</sup> <a name="MinClusterCountInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCountInput"></a>

```go
func MinClusterCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryAccelerationMaxScaleFactorInput`<sup>Optional</sup> <a name="QueryAccelerationMaxScaleFactorInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactorInput"></a>

```go
func QueryAccelerationMaxScaleFactorInput() *f64
```

- *Type:* *f64

---

##### `ResourceMonitorInput`<sup>Optional</sup> <a name="ResourceMonitorInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitorInput"></a>

```go
func ResourceMonitorInput() *string
```

- *Type:* *string

---

##### `ScalingPolicyInput`<sup>Optional</sup> <a name="ScalingPolicyInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicyInput"></a>

```go
func ScalingPolicyInput() *string
```

- *Type:* *string

---

##### `StatementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSecondsInput"></a>

```go
func StatementQueuedTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `StatementTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSecondsInput"></a>

```go
func StatementTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `WarehouseSizeInput`<sup>Optional</sup> <a name="WarehouseSizeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput"></a>

```go
func WarehouseSizeInput() *string
```

- *Type:* *string

---

##### `WarehouseTypeInput`<sup>Optional</sup> <a name="WarehouseTypeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput"></a>

```go
func WarehouseTypeInput() *string
```

- *Type:* *string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume"></a>

```go
func AutoResume() *string
```

- *Type:* *string

---

##### `AutoSuspend`<sup>Required</sup> <a name="AutoSuspend" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend"></a>

```go
func AutoSuspend() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `EnableQueryAcceleration`<sup>Required</sup> <a name="EnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration"></a>

```go
func EnableQueryAcceleration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspended"></a>

```go
func InitiallySuspended() interface{}
```

- *Type:* interface{}

---

##### `MaxClusterCount`<sup>Required</sup> <a name="MaxClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCount"></a>

```go
func MaxClusterCount() *f64
```

- *Type:* *f64

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevel"></a>

```go
func MaxConcurrencyLevel() *f64
```

- *Type:* *f64

---

##### `MinClusterCount`<sup>Required</sup> <a name="MinClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCount"></a>

```go
func MinClusterCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryAccelerationMaxScaleFactor`<sup>Required</sup> <a name="QueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactor"></a>

```go
func QueryAccelerationMaxScaleFactor() *f64
```

- *Type:* *f64

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitor"></a>

```go
func ResourceMonitor() *string
```

- *Type:* *string

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicy"></a>

```go
func ScalingPolicy() *string
```

- *Type:* *string

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSeconds"></a>

```go
func StatementQueuedTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSeconds"></a>

```go
func StatementTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `WarehouseSize`<sup>Required</sup> <a name="WarehouseSize" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSize"></a>

```go
func WarehouseSize() *string
```

- *Type:* *string

---

##### `WarehouseType`<sup>Required</sup> <a name="WarehouseType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseType"></a>

```go
func WarehouseType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseConfig <a name="WarehouseConfig" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

&warehouse.WarehouseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AutoResume: *string,
	AutoSuspend: *f64,
	Comment: *string,
	EnableQueryAcceleration: *string,
	Id: *string,
	InitiallySuspended: interface{},
	MaxClusterCount: *f64,
	MaxConcurrencyLevel: *f64,
	MinClusterCount: *f64,
	QueryAccelerationMaxScaleFactor: *f64,
	ResourceMonitor: *string,
	ScalingPolicy: *string,
	StatementQueuedTimeoutInSeconds: *f64,
	StatementTimeoutInSeconds: *f64,
	WarehouseSize: *string,
	WarehouseType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.name">Name</a></code> | <code>*string</code> | Identifier for the virtual warehouse; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume">AutoResume</a></code> | <code>*string</code> | Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend">AutoSuspend</a></code> | <code>*f64</code> | Specifies the number of seconds of inactivity after which a warehouse is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>*string</code> | Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#id Warehouse#id}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended">InitiallySuspended</a></code> | <code>interface{}</code> | Specifies whether the warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount">MaxClusterCount</a></code> | <code>*f64</code> | Specifies the maximum number of server clusters for the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>*f64</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount">MinClusterCount</a></code> | <code>*f64</code> | Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor">QueryAccelerationMaxScaleFactor</a></code> | <code>*f64</code> | Specifies the maximum scale factor for leasing compute resources for query acceleration. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor">ResourceMonitor</a></code> | <code>*string</code> | Specifies the name of a resource monitor that is explicitly assigned to the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy">ScalingPolicy</a></code> | <code>*string</code> | Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>*f64</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>*f64</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize">WarehouseSize</a></code> | <code>*string</code> | Specifies the size of the virtual warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | Specifies warehouse type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier for the virtual warehouse; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#name Warehouse#name}

---

##### `AutoResume`<sup>Optional</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume"></a>

```go
AutoResume *string
```

- *Type:* *string

Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#auto_resume Warehouse#auto_resume}

---

##### `AutoSuspend`<sup>Optional</sup> <a name="AutoSuspend" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend"></a>

```go
AutoSuspend *f64
```

- *Type:* *f64

Specifies the number of seconds of inactivity after which a warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#auto_suspend Warehouse#auto_suspend}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#comment Warehouse#comment}

---

##### `EnableQueryAcceleration`<sup>Optional</sup> <a name="EnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration"></a>

```go
EnableQueryAcceleration *string
```

- *Type:* *string

Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#enable_query_acceleration Warehouse#enable_query_acceleration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#id Warehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitiallySuspended`<sup>Optional</sup> <a name="InitiallySuspended" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended"></a>

```go
InitiallySuspended interface{}
```

- *Type:* interface{}

Specifies whether the warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#initially_suspended Warehouse#initially_suspended}

---

##### `MaxClusterCount`<sup>Optional</sup> <a name="MaxClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount"></a>

```go
MaxClusterCount *f64
```

- *Type:* *f64

Specifies the maximum number of server clusters for the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#max_cluster_count Warehouse#max_cluster_count}

---

##### `MaxConcurrencyLevel`<sup>Optional</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel"></a>

```go
MaxConcurrencyLevel *f64
```

- *Type:* *f64

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#max_concurrency_level Warehouse#max_concurrency_level}

---

##### `MinClusterCount`<sup>Optional</sup> <a name="MinClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount"></a>

```go
MinClusterCount *f64
```

- *Type:* *f64

Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#min_cluster_count Warehouse#min_cluster_count}

---

##### `QueryAccelerationMaxScaleFactor`<sup>Optional</sup> <a name="QueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor"></a>

```go
QueryAccelerationMaxScaleFactor *f64
```

- *Type:* *f64

Specifies the maximum scale factor for leasing compute resources for query acceleration.

The scale factor is used as a multiplier based on warehouse size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#query_acceleration_max_scale_factor Warehouse#query_acceleration_max_scale_factor}

---

##### `ResourceMonitor`<sup>Optional</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor"></a>

```go
ResourceMonitor *string
```

- *Type:* *string

Specifies the name of a resource monitor that is explicitly assigned to the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#resource_monitor Warehouse#resource_monitor}

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy"></a>

```go
ScalingPolicy *string
```

- *Type:* *string

Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode.

Valid values are (case-insensitive): `STANDARD` | `ECONOMY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#scaling_policy Warehouse#scaling_policy}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds"></a>

```go
StatementQueuedTimeoutInSeconds *f64
```

- *Type:* *f64

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#statement_queued_timeout_in_seconds Warehouse#statement_queued_timeout_in_seconds}

---

##### `StatementTimeoutInSeconds`<sup>Optional</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds"></a>

```go
StatementTimeoutInSeconds *f64
```

- *Type:* *f64

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#statement_timeout_in_seconds Warehouse#statement_timeout_in_seconds}

---

##### `WarehouseSize`<sup>Optional</sup> <a name="WarehouseSize" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize"></a>

```go
WarehouseSize *string
```

- *Type:* *string

Specifies the size of the virtual warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Consult [warehouse documentation](https://docs.snowflake.com/en/sql-reference/sql/create-warehouse#optional-properties-objectproperties) for the details. Note: removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#warehouse_size Warehouse#warehouse_size}

---

##### `WarehouseType`<sup>Optional</sup> <a name="WarehouseType" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType"></a>

```go
WarehouseType *string
```

- *Type:* *string

Specifies warehouse type.

Valid values are (case-insensitive): `STANDARD` | `SNOWPARK-OPTIMIZED`. Warehouse needs to be suspended to change its type. Provider will handle automatic suspension and resumption if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/warehouse#warehouse_type Warehouse#warehouse_type}

---

### WarehouseParameters <a name="WarehouseParameters" id="@cdktf/provider-snowflake.warehouse.WarehouseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

&warehouse.WarehouseParameters {

}
```


### WarehouseParametersMaxConcurrencyLevel <a name="WarehouseParametersMaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

&warehouse.WarehouseParametersMaxConcurrencyLevel {

}
```


### WarehouseParametersStatementQueuedTimeoutInSeconds <a name="WarehouseParametersStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

&warehouse.WarehouseParametersStatementQueuedTimeoutInSeconds {

}
```


### WarehouseParametersStatementTimeoutInSeconds <a name="WarehouseParametersStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSeconds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

&warehouse.WarehouseParametersStatementTimeoutInSeconds {

}
```


### WarehouseShowOutput <a name="WarehouseShowOutput" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

&warehouse.WarehouseShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### WarehouseParametersList <a name="WarehouseParametersList" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WarehouseParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.get"></a>

```go
func Get(index *f64) WarehouseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WarehouseParametersMaxConcurrencyLevelList <a name="WarehouseParametersMaxConcurrencyLevelList" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersMaxConcurrencyLevelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WarehouseParametersMaxConcurrencyLevelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.get"></a>

```go
func Get(index *f64) WarehouseParametersMaxConcurrencyLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WarehouseParametersMaxConcurrencyLevelOutputReference <a name="WarehouseParametersMaxConcurrencyLevelOutputReference" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersMaxConcurrencyLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WarehouseParametersMaxConcurrencyLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevel">WarehouseParametersMaxConcurrencyLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() WarehouseParametersMaxConcurrencyLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevel">WarehouseParametersMaxConcurrencyLevel</a>

---


### WarehouseParametersOutputReference <a name="WarehouseParametersOutputReference" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WarehouseParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList">WarehouseParametersMaxConcurrencyLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList">WarehouseParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList">WarehouseParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParameters">WarehouseParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.maxConcurrencyLevel"></a>

```go
func MaxConcurrencyLevel() WarehouseParametersMaxConcurrencyLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersMaxConcurrencyLevelList">WarehouseParametersMaxConcurrencyLevelList</a>

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```go
func StatementQueuedTimeoutInSeconds() WarehouseParametersStatementQueuedTimeoutInSecondsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList">WarehouseParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.statementTimeoutInSeconds"></a>

```go
func StatementTimeoutInSeconds() WarehouseParametersStatementTimeoutInSecondsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList">WarehouseParametersStatementTimeoutInSecondsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() WarehouseParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParameters">WarehouseParameters</a>

---


### WarehouseParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseParametersStatementQueuedTimeoutInSecondsList" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersStatementQueuedTimeoutInSecondsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WarehouseParametersStatementQueuedTimeoutInSecondsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.get"></a>

```go
func Get(index *f64) WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersStatementQueuedTimeoutInSecondsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSeconds">WarehouseParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```go
func InternalValue() WarehouseParametersStatementQueuedTimeoutInSeconds
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementQueuedTimeoutInSeconds">WarehouseParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseParametersStatementTimeoutInSecondsList <a name="WarehouseParametersStatementTimeoutInSecondsList" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersStatementTimeoutInSecondsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WarehouseParametersStatementTimeoutInSecondsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.get"></a>

```go
func Get(index *f64) WarehouseParametersStatementTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WarehouseParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseParametersStatementTimeoutInSecondsOutputReference" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseParametersStatementTimeoutInSecondsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WarehouseParametersStatementTimeoutInSecondsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSeconds">WarehouseParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```go
func InternalValue() WarehouseParametersStatementTimeoutInSeconds
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseParametersStatementTimeoutInSeconds">WarehouseParametersStatementTimeoutInSeconds</a>

---


### WarehouseShowOutputList <a name="WarehouseShowOutputList" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WarehouseShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.get"></a>

```go
func Get(index *f64) WarehouseShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WarehouseShowOutputOutputReference <a name="WarehouseShowOutputOutputReference" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/warehouse"

warehouse.NewWarehouseShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WarehouseShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.autoResume">AutoResume</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.autoSuspend">AutoSuspend</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.available">Available</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.isCurrent">IsCurrent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.maxClusterCount">MaxClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.minClusterCount">MinClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.other">Other</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.provisioning">Provisioning</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.queryAccelerationMaxScaleFactor">QueryAccelerationMaxScaleFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.queued">Queued</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.quiescing">Quiescing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.resourceMonitor">ResourceMonitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.resumedOn">ResumedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.running">Running</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.scalingPolicy">ScalingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.startedClusters">StartedClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutput">WarehouseShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.autoResume"></a>

```go
func AutoResume() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoSuspend`<sup>Required</sup> <a name="AutoSuspend" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.autoSuspend"></a>

```go
func AutoSuspend() *f64
```

- *Type:* *f64

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.available"></a>

```go
func Available() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `EnableQueryAcceleration`<sup>Required</sup> <a name="EnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.enableQueryAcceleration"></a>

```go
func EnableQueryAcceleration() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.isCurrent"></a>

```go
func IsCurrent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxClusterCount`<sup>Required</sup> <a name="MaxClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.maxClusterCount"></a>

```go
func MaxClusterCount() *f64
```

- *Type:* *f64

---

##### `MinClusterCount`<sup>Required</sup> <a name="MinClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.minClusterCount"></a>

```go
func MinClusterCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Other`<sup>Required</sup> <a name="Other" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.other"></a>

```go
func Other() *f64
```

- *Type:* *f64

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `Provisioning`<sup>Required</sup> <a name="Provisioning" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.provisioning"></a>

```go
func Provisioning() *f64
```

- *Type:* *f64

---

##### `QueryAccelerationMaxScaleFactor`<sup>Required</sup> <a name="QueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.queryAccelerationMaxScaleFactor"></a>

```go
func QueryAccelerationMaxScaleFactor() *f64
```

- *Type:* *f64

---

##### `Queued`<sup>Required</sup> <a name="Queued" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.queued"></a>

```go
func Queued() *f64
```

- *Type:* *f64

---

##### `Quiescing`<sup>Required</sup> <a name="Quiescing" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.quiescing"></a>

```go
func Quiescing() *f64
```

- *Type:* *f64

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.resourceMonitor"></a>

```go
func ResourceMonitor() *string
```

- *Type:* *string

---

##### `ResumedOn`<sup>Required</sup> <a name="ResumedOn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.resumedOn"></a>

```go
func ResumedOn() *string
```

- *Type:* *string

---

##### `Running`<sup>Required</sup> <a name="Running" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.running"></a>

```go
func Running() *f64
```

- *Type:* *f64

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.scalingPolicy"></a>

```go
func ScalingPolicy() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `StartedClusters`<sup>Required</sup> <a name="StartedClusters" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.startedClusters"></a>

```go
func StartedClusters() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() WarehouseShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseShowOutput">WarehouseShowOutput</a>

---



