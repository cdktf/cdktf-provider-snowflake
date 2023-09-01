# `snowflake_stream`

Refer to the Terraform Registory for docs: [`snowflake_stream`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream).

# `stream` Submodule <a name="`stream` Submodule" id="@cdktf/provider-snowflake.stream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stream <a name="Stream" id="@cdktf/provider-snowflake.stream.Stream"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream snowflake_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.stream.Stream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/stream"

stream.NewStream(scope Construct, id *string, config StreamConfig) Stream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig">StreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.stream.StreamConfig">StreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetAppendOnly">ResetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetInsertOnly">ResetInsertOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOnStage">ResetOnStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOnTable">ResetOnTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOnView">ResetOnView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetShowInitialRows">ResetShowInitialRows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.stream.Stream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.stream.Stream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.stream.Stream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.stream.Stream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.stream.Stream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.stream.Stream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.stream.Stream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.stream.Stream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.stream.Stream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.stream.Stream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.stream.Stream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.stream.Stream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.stream.Stream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.stream.Stream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stream.Stream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAppendOnly` <a name="ResetAppendOnly" id="@cdktf/provider-snowflake.stream.Stream.resetAppendOnly"></a>

```go
func ResetAppendOnly()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.stream.Stream.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.stream.Stream.resetId"></a>

```go
func ResetId()
```

##### `ResetInsertOnly` <a name="ResetInsertOnly" id="@cdktf/provider-snowflake.stream.Stream.resetInsertOnly"></a>

```go
func ResetInsertOnly()
```

##### `ResetOnStage` <a name="ResetOnStage" id="@cdktf/provider-snowflake.stream.Stream.resetOnStage"></a>

```go
func ResetOnStage()
```

##### `ResetOnTable` <a name="ResetOnTable" id="@cdktf/provider-snowflake.stream.Stream.resetOnTable"></a>

```go
func ResetOnTable()
```

##### `ResetOnView` <a name="ResetOnView" id="@cdktf/provider-snowflake.stream.Stream.resetOnView"></a>

```go
func ResetOnView()
```

##### `ResetShowInitialRows` <a name="ResetShowInitialRows" id="@cdktf/provider-snowflake.stream.Stream.resetShowInitialRows"></a>

```go
func ResetShowInitialRows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.stream.Stream.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/stream"

stream.Stream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stream.Stream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.stream.Stream.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/stream"

stream.Stream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stream.Stream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.stream.Stream.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/stream"

stream.Stream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stream.Stream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.appendOnlyInput">AppendOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.insertOnlyInput">InsertOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onStageInput">OnStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onTableInput">OnTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onViewInput">OnViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.showInitialRowsInput">ShowInitialRowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.appendOnly">AppendOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.insertOnly">InsertOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onStage">OnStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onTable">OnTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onView">OnView</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.showInitialRows">ShowInitialRows</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.stream.Stream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.stream.Stream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.stream.Stream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.stream.Stream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.stream.Stream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.stream.Stream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.stream.Stream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.stream.Stream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.stream.Stream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.stream.Stream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.stream.Stream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.stream.Stream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.stream.Stream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.stream.Stream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.stream.Stream.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `AppendOnlyInput`<sup>Optional</sup> <a name="AppendOnlyInput" id="@cdktf/provider-snowflake.stream.Stream.property.appendOnlyInput"></a>

```go
func AppendOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.stream.Stream.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.stream.Stream.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.stream.Stream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsertOnlyInput`<sup>Optional</sup> <a name="InsertOnlyInput" id="@cdktf/provider-snowflake.stream.Stream.property.insertOnlyInput"></a>

```go
func InsertOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.stream.Stream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnStageInput`<sup>Optional</sup> <a name="OnStageInput" id="@cdktf/provider-snowflake.stream.Stream.property.onStageInput"></a>

```go
func OnStageInput() *string
```

- *Type:* *string

---

##### `OnTableInput`<sup>Optional</sup> <a name="OnTableInput" id="@cdktf/provider-snowflake.stream.Stream.property.onTableInput"></a>

```go
func OnTableInput() *string
```

- *Type:* *string

---

##### `OnViewInput`<sup>Optional</sup> <a name="OnViewInput" id="@cdktf/provider-snowflake.stream.Stream.property.onViewInput"></a>

```go
func OnViewInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.stream.Stream.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `ShowInitialRowsInput`<sup>Optional</sup> <a name="ShowInitialRowsInput" id="@cdktf/provider-snowflake.stream.Stream.property.showInitialRowsInput"></a>

```go
func ShowInitialRowsInput() interface{}
```

- *Type:* interface{}

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktf/provider-snowflake.stream.Stream.property.appendOnly"></a>

```go
func AppendOnly() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.stream.Stream.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.stream.Stream.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.stream.Stream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsertOnly`<sup>Required</sup> <a name="InsertOnly" id="@cdktf/provider-snowflake.stream.Stream.property.insertOnly"></a>

```go
func InsertOnly() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.stream.Stream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnStage`<sup>Required</sup> <a name="OnStage" id="@cdktf/provider-snowflake.stream.Stream.property.onStage"></a>

```go
func OnStage() *string
```

- *Type:* *string

---

##### `OnTable`<sup>Required</sup> <a name="OnTable" id="@cdktf/provider-snowflake.stream.Stream.property.onTable"></a>

```go
func OnTable() *string
```

- *Type:* *string

---

##### `OnView`<sup>Required</sup> <a name="OnView" id="@cdktf/provider-snowflake.stream.Stream.property.onView"></a>

```go
func OnView() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.stream.Stream.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `ShowInitialRows`<sup>Required</sup> <a name="ShowInitialRows" id="@cdktf/provider-snowflake.stream.Stream.property.showInitialRows"></a>

```go
func ShowInitialRows() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.stream.Stream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConfig <a name="StreamConfig" id="@cdktf/provider-snowflake.stream.StreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.stream.StreamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/stream"

&stream.StreamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Name: *string,
	Schema: *string,
	AppendOnly: interface{},
	Comment: *string,
	Id: *string,
	InsertOnly: interface{},
	OnStage: *string,
	OnTable: *string,
	OnView: *string,
	ShowInitialRows: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.appendOnly">AppendOnly</a></code> | <code>interface{}</code> | Type of the stream that will be created. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#id Stream#id}. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.insertOnly">InsertOnly</a></code> | <code>interface{}</code> | Create an insert only stream type. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.onStage">OnStage</a></code> | <code>*string</code> | Name of the stage the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.onTable">OnTable</a></code> | <code>*string</code> | Name of the table the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.onView">OnView</a></code> | <code>*string</code> | Name of the view the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.showInitialRows">ShowInitialRows</a></code> | <code>interface{}</code> | Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.stream.StreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.stream.StreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.stream.StreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.stream.StreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.stream.StreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.stream.StreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.stream.StreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.stream.StreamConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#database Stream#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.stream.StreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#name Stream#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.stream.StreamConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#schema Stream#schema}

---

##### `AppendOnly`<sup>Optional</sup> <a name="AppendOnly" id="@cdktf/provider-snowflake.stream.StreamConfig.property.appendOnly"></a>

```go
AppendOnly interface{}
```

- *Type:* interface{}

Type of the stream that will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#append_only Stream#append_only}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.stream.StreamConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#comment Stream#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.stream.StreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#id Stream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsertOnly`<sup>Optional</sup> <a name="InsertOnly" id="@cdktf/provider-snowflake.stream.StreamConfig.property.insertOnly"></a>

```go
InsertOnly interface{}
```

- *Type:* interface{}

Create an insert only stream type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#insert_only Stream#insert_only}

---

##### `OnStage`<sup>Optional</sup> <a name="OnStage" id="@cdktf/provider-snowflake.stream.StreamConfig.property.onStage"></a>

```go
OnStage *string
```

- *Type:* *string

Name of the stage the stream will monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#on_stage Stream#on_stage}

---

##### `OnTable`<sup>Optional</sup> <a name="OnTable" id="@cdktf/provider-snowflake.stream.StreamConfig.property.onTable"></a>

```go
OnTable *string
```

- *Type:* *string

Name of the table the stream will monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#on_table Stream#on_table}

---

##### `OnView`<sup>Optional</sup> <a name="OnView" id="@cdktf/provider-snowflake.stream.StreamConfig.property.onView"></a>

```go
OnView *string
```

- *Type:* *string

Name of the view the stream will monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#on_view Stream#on_view}

---

##### `ShowInitialRows`<sup>Optional</sup> <a name="ShowInitialRows" id="@cdktf/provider-snowflake.stream.StreamConfig.property.showInitialRows"></a>

```go
ShowInitialRows interface{}
```

- *Type:* interface{}

Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/stream#show_initial_rows Stream#show_initial_rows}

---



