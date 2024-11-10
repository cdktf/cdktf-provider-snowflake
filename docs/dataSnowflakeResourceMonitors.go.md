# `dataSnowflakeResourceMonitors` Submodule <a name="`dataSnowflakeResourceMonitors` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeResourceMonitors <a name="DataSnowflakeResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/resource_monitors snowflake_resource_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.NewDataSnowflakeResourceMonitors(scope Construct, id *string, config DataSnowflakeResourceMonitorsConfig) DataSnowflakeResourceMonitors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig">DataSnowflakeResourceMonitorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig">DataSnowflakeResourceMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetLike">ResetLike</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetLike"></a>

```go
func ResetLike()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.DataSnowflakeResourceMonitors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.DataSnowflakeResourceMonitors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.DataSnowflakeResourceMonitors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.DataSnowflakeResourceMonitors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeResourceMonitors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeResourceMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/resource_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeResourceMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.resourceMonitors">ResourceMonitors</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList">DataSnowflakeResourceMonitorsResourceMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.like">Like</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ResourceMonitors`<sup>Required</sup> <a name="ResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.resourceMonitors"></a>

```go
func ResourceMonitors() DataSnowflakeResourceMonitorsResourceMonitorsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList">DataSnowflakeResourceMonitorsResourceMonitorsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeResourceMonitorsConfig <a name="DataSnowflakeResourceMonitorsConfig" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

&datasnowflakeresourcemonitors.DataSnowflakeResourceMonitorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Like: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/resource_monitors#like DataSnowflakeResourceMonitors#like}

---

### DataSnowflakeResourceMonitorsResourceMonitors <a name="DataSnowflakeResourceMonitorsResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

&datasnowflakeresourcemonitors.DataSnowflakeResourceMonitorsResourceMonitors {

}
```


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutput <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

&datasnowflakeresourcemonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeResourceMonitorsResourceMonitorsList <a name="DataSnowflakeResourceMonitorsResourceMonitorsList" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.NewDataSnowflakeResourceMonitorsResourceMonitorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeResourceMonitorsResourceMonitorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get"></a>

```go
func Get(index *f64) DataSnowflakeResourceMonitorsResourceMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeResourceMonitorsResourceMonitorsOutputReference <a name="DataSnowflakeResourceMonitorsResourceMonitorsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.NewDataSnowflakeResourceMonitorsResourceMonitorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeResourceMonitorsResourceMonitorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList">DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors">DataSnowflakeResourceMonitorsResourceMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList">DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeResourceMonitorsResourceMonitors
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors">DataSnowflakeResourceMonitorsResourceMonitors</a>

---


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.NewDataSnowflakeResourceMonitorsResourceMonitorsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeresourcemonitors"

datasnowflakeresourcemonitors.NewDataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creditQuota">CreditQuota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.remainingCredits">RemainingCredits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendAt">SuspendAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendImmediateAt">SuspendImmediateAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.usedCredits">UsedCredits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput">DataSnowflakeResourceMonitorsResourceMonitorsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CreditQuota`<sup>Required</sup> <a name="CreditQuota" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creditQuota"></a>

```go
func CreditQuota() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `RemainingCredits`<sup>Required</sup> <a name="RemainingCredits" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.remainingCredits"></a>

```go
func RemainingCredits() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `SuspendAt`<sup>Required</sup> <a name="SuspendAt" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendAt"></a>

```go
func SuspendAt() *f64
```

- *Type:* *f64

---

##### `SuspendImmediateAt`<sup>Required</sup> <a name="SuspendImmediateAt" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendImmediateAt"></a>

```go
func SuspendImmediateAt() *f64
```

- *Type:* *f64

---

##### `UsedCredits`<sup>Required</sup> <a name="UsedCredits" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.usedCredits"></a>

```go
func UsedCredits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeResourceMonitorsResourceMonitorsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput">DataSnowflakeResourceMonitorsResourceMonitorsShowOutput</a>

---



