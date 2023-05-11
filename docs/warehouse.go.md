# `snowflake_warehouse`

Refer to the Terraform Registory for docs: [`snowflake_warehouse`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse).

# `warehouse` Submodule <a name="`warehouse` Submodule" id="@cdktf/provider-snowflake.warehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Warehouse <a name="Warehouse" id="@cdktf/provider-snowflake.warehouse.Warehouse"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse snowflake_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

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
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.putTag">PutTag</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWaitForProvisioning">ResetWaitForProvisioning</a></code> | *No description.* |
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

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

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

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-snowflake.warehouse.Warehouse.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.warehouse.Warehouse.putTag.parameter.value"></a>

- *Type:* interface{}

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

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWaitForProvisioning` <a name="ResetWaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWaitForProvisioning"></a>

```go
func ResetWaitForProvisioning()
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

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

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
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

warehouse.Warehouse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

warehouse.Warehouse_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

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
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList">WarehouseTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput">AutoResumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput">AutoSuspendInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput">EnableQueryAccelerationInput</a></code> | <code>interface{}</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioningInput">WaitForProvisioningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput">WarehouseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput">WarehouseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume">AutoResume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend">AutoSuspend</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>interface{}</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioning">WaitForProvisioning</a></code> | <code>interface{}</code> | *No description.* |
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

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.tag"></a>

```go
func Tag() WarehouseTagList
```

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList">WarehouseTagList</a>

---

##### `AutoResumeInput`<sup>Optional</sup> <a name="AutoResumeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput"></a>

```go
func AutoResumeInput() interface{}
```

- *Type:* interface{}

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
func EnableQueryAccelerationInput() interface{}
```

- *Type:* interface{}

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

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForProvisioningInput`<sup>Optional</sup> <a name="WaitForProvisioningInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioningInput"></a>

```go
func WaitForProvisioningInput() interface{}
```

- *Type:* interface{}

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
func AutoResume() interface{}
```

- *Type:* interface{}

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
func EnableQueryAcceleration() interface{}
```

- *Type:* interface{}

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

##### `WaitForProvisioning`<sup>Required</sup> <a name="WaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioning"></a>

```go
func WaitForProvisioning() interface{}
```

- *Type:* interface{}

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
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

&warehouse.WarehouseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AutoResume: interface{},
	AutoSuspend: *f64,
	Comment: *string,
	EnableQueryAcceleration: interface{},
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
	Tag: interface{},
	WaitForProvisioning: interface{},
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
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume">AutoResume</a></code> | <code>interface{}</code> | Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend">AutoSuspend</a></code> | <code>*f64</code> | Specifies the number of seconds of inactivity after which a warehouse is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#comment Warehouse#comment}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>interface{}</code> | Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#id Warehouse#id}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended">InitiallySuspended</a></code> | <code>interface{}</code> | Specifies whether the warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount">MaxClusterCount</a></code> | <code>*f64</code> | Specifies the maximum number of server clusters for the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>*f64</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount">MinClusterCount</a></code> | <code>*f64</code> | Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor">QueryAccelerationMaxScaleFactor</a></code> | <code>*f64</code> | Specifies the maximum scale factor for leasing compute resources for query acceleration. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor">ResourceMonitor</a></code> | <code>*string</code> | Specifies the name of a resource monitor that is explicitly assigned to the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy">ScalingPolicy</a></code> | <code>*string</code> | Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>*f64</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>*f64</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.waitForProvisioning">WaitForProvisioning</a></code> | <code>interface{}</code> | Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize">WarehouseSize</a></code> | <code>*string</code> | Specifies the size of the virtual warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#name Warehouse#name}

---

##### `AutoResume`<sup>Optional</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume"></a>

```go
AutoResume interface{}
```

- *Type:* interface{}

Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#auto_resume Warehouse#auto_resume}

---

##### `AutoSuspend`<sup>Optional</sup> <a name="AutoSuspend" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend"></a>

```go
AutoSuspend *f64
```

- *Type:* *f64

Specifies the number of seconds of inactivity after which a warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#auto_suspend Warehouse#auto_suspend}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#comment Warehouse#comment}.

---

##### `EnableQueryAcceleration`<sup>Optional</sup> <a name="EnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration"></a>

```go
EnableQueryAcceleration interface{}
```

- *Type:* interface{}

Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#enable_query_acceleration Warehouse#enable_query_acceleration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#id Warehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitiallySuspended`<sup>Optional</sup> <a name="InitiallySuspended" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended"></a>

```go
InitiallySuspended interface{}
```

- *Type:* interface{}

Specifies whether the warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#initially_suspended Warehouse#initially_suspended}

---

##### `MaxClusterCount`<sup>Optional</sup> <a name="MaxClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount"></a>

```go
MaxClusterCount *f64
```

- *Type:* *f64

Specifies the maximum number of server clusters for the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#max_cluster_count Warehouse#max_cluster_count}

---

##### `MaxConcurrencyLevel`<sup>Optional</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel"></a>

```go
MaxConcurrencyLevel *f64
```

- *Type:* *f64

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#max_concurrency_level Warehouse#max_concurrency_level}

---

##### `MinClusterCount`<sup>Optional</sup> <a name="MinClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount"></a>

```go
MinClusterCount *f64
```

- *Type:* *f64

Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#min_cluster_count Warehouse#min_cluster_count}

---

##### `QueryAccelerationMaxScaleFactor`<sup>Optional</sup> <a name="QueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor"></a>

```go
QueryAccelerationMaxScaleFactor *f64
```

- *Type:* *f64

Specifies the maximum scale factor for leasing compute resources for query acceleration.

The scale factor is used as a multiplier based on warehouse size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#query_acceleration_max_scale_factor Warehouse#query_acceleration_max_scale_factor}

---

##### `ResourceMonitor`<sup>Optional</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor"></a>

```go
ResourceMonitor *string
```

- *Type:* *string

Specifies the name of a resource monitor that is explicitly assigned to the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#resource_monitor Warehouse#resource_monitor}

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy"></a>

```go
ScalingPolicy *string
```

- *Type:* *string

Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#scaling_policy Warehouse#scaling_policy}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds"></a>

```go
StatementQueuedTimeoutInSeconds *f64
```

- *Type:* *f64

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#statement_queued_timeout_in_seconds Warehouse#statement_queued_timeout_in_seconds}

---

##### `StatementTimeoutInSeconds`<sup>Optional</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds"></a>

```go
StatementTimeoutInSeconds *f64
```

- *Type:* *f64

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#statement_timeout_in_seconds Warehouse#statement_timeout_in_seconds}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#tag Warehouse#tag}

---

##### `WaitForProvisioning`<sup>Optional</sup> <a name="WaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.waitForProvisioning"></a>

```go
WaitForProvisioning interface{}
```

- *Type:* interface{}

Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#wait_for_provisioning Warehouse#wait_for_provisioning}

---

##### `WarehouseSize`<sup>Optional</sup> <a name="WarehouseSize" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize"></a>

```go
WarehouseSize *string
```

- *Type:* *string

Specifies the size of the virtual warehouse.

Larger warehouse sizes 5X-Large and 6X-Large are currently in preview and only available on Amazon Web Services (AWS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#warehouse_size Warehouse#warehouse_size}

---

##### `WarehouseType`<sup>Optional</sup> <a name="WarehouseType" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType"></a>

```go
WarehouseType *string
```

- *Type:* *string

Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#warehouse_type Warehouse#warehouse_type}

---

### WarehouseTag <a name="WarehouseTag" id="@cdktf/provider-snowflake.warehouse.WarehouseTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

&warehouse.WarehouseTag {
	Name: *string,
	Value: *string,
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTag.property.name">Name</a></code> | <code>*string</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTag.property.value">Value</a></code> | <code>*string</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTag.property.database">Database</a></code> | <code>*string</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTag.property.schema">Schema</a></code> | <code>*string</code> | Name of the schema that the tag was created in. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.WarehouseTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#name Warehouse#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.warehouse.WarehouseTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#value Warehouse#value}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.warehouse.WarehouseTag.property.database"></a>

```go
Database *string
```

- *Type:* *string

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#database Warehouse#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.warehouse.WarehouseTag.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/warehouse#schema Warehouse#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseTagList <a name="WarehouseTagList" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

warehouse.NewWarehouseTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WarehouseTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.get"></a>

```go
func Get(index *f64) WarehouseTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WarehouseTagOutputReference <a name="WarehouseTagOutputReference" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/warehouse"

warehouse.NewWarehouseTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WarehouseTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.warehouse.WarehouseTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



