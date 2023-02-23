# `pipe` Submodule <a name="`pipe` Submodule" id="@cdktf/provider-snowflake.pipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipe <a name="Pipe" id="@cdktf/provider-snowflake.pipe.Pipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/pipe snowflake_pipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/pipe"

pipe.NewPipe(scope Construct, id *string, config PipeConfig) Pipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig">PipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.pipe.PipeConfig">PipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetAutoIngest">ResetAutoIngest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetAwsSnsTopicArn">ResetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetErrorIntegration">ResetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetIntegration">ResetIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.pipe.Pipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.pipe.Pipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.pipe.Pipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.pipe.Pipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAutoIngest` <a name="ResetAutoIngest" id="@cdktf/provider-snowflake.pipe.Pipe.resetAutoIngest"></a>

```go
func ResetAutoIngest()
```

##### `ResetAwsSnsTopicArn` <a name="ResetAwsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.Pipe.resetAwsSnsTopicArn"></a>

```go
func ResetAwsSnsTopicArn()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.pipe.Pipe.resetComment"></a>

```go
func ResetComment()
```

##### `ResetErrorIntegration` <a name="ResetErrorIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.resetErrorIntegration"></a>

```go
func ResetErrorIntegration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.pipe.Pipe.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegration` <a name="ResetIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.resetIntegration"></a>

```go
func ResetIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.pipe.Pipe.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/pipe"

pipe.Pipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/pipe"

pipe.Pipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/pipe"

pipe.Pipe_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.notificationChannel">NotificationChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.autoIngestInput">AutoIngestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArnInput">AwsSnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.copyStatementInput">CopyStatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegrationInput">ErrorIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.integrationInput">IntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.autoIngest">AutoIngest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.copyStatement">CopyStatement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegration">ErrorIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.integration">Integration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.pipe.Pipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.pipe.Pipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.pipe.Pipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.pipe.Pipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.pipe.Pipe.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.pipe.Pipe.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.pipe.Pipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.pipe.Pipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.pipe.Pipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.pipe.Pipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.pipe.Pipe.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationChannel`<sup>Required</sup> <a name="NotificationChannel" id="@cdktf/provider-snowflake.pipe.Pipe.property.notificationChannel"></a>

```go
func NotificationChannel() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.pipe.Pipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `AutoIngestInput`<sup>Optional</sup> <a name="AutoIngestInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.autoIngestInput"></a>

```go
func AutoIngestInput() interface{}
```

- *Type:* interface{}

---

##### `AwsSnsTopicArnInput`<sup>Optional</sup> <a name="AwsSnsTopicArnInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArnInput"></a>

```go
func AwsSnsTopicArnInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CopyStatementInput`<sup>Optional</sup> <a name="CopyStatementInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.copyStatementInput"></a>

```go
func CopyStatementInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `ErrorIntegrationInput`<sup>Optional</sup> <a name="ErrorIntegrationInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegrationInput"></a>

```go
func ErrorIntegrationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.integrationInput"></a>

```go
func IntegrationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `AutoIngest`<sup>Required</sup> <a name="AutoIngest" id="@cdktf/provider-snowflake.pipe.Pipe.property.autoIngest"></a>

```go
func AutoIngest() interface{}
```

- *Type:* interface{}

---

##### `AwsSnsTopicArn`<sup>Required</sup> <a name="AwsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArn"></a>

```go
func AwsSnsTopicArn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.pipe.Pipe.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CopyStatement`<sup>Required</sup> <a name="CopyStatement" id="@cdktf/provider-snowflake.pipe.Pipe.property.copyStatement"></a>

```go
func CopyStatement() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.pipe.Pipe.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegration"></a>

```go
func ErrorIntegration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.pipe.Pipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktf/provider-snowflake.pipe.Pipe.property.integration"></a>

```go
func Integration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.pipe.Pipe.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.pipe.Pipe.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.pipe.Pipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PipeConfig <a name="PipeConfig" id="@cdktf/provider-snowflake.pipe.PipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.pipe.PipeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/pipe"

&pipe.PipeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CopyStatement: *string,
	Database: *string,
	Name: *string,
	Schema: *string,
	AutoIngest: interface{},
	AwsSnsTopicArn: *string,
	Comment: *string,
	ErrorIntegration: *string,
	Id: *string,
	Integration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.copyStatement">CopyStatement</a></code> | <code>*string</code> | Specifies the copy statement for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the pipe; |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.autoIngest">AutoIngest</a></code> | <code>interface{}</code> | Specifies a auto_ingest param for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.errorIntegration">ErrorIntegration</a></code> | <code>*string</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#id Pipe#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.integration">Integration</a></code> | <code>*string</code> | Specifies an integration for the pipe. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CopyStatement`<sup>Required</sup> <a name="CopyStatement" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.copyStatement"></a>

```go
CopyStatement *string
```

- *Type:* *string

Specifies the copy statement for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#copy_statement Pipe#copy_statement}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#database Pipe#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the pipe;

must be unique for the database and schema in which the pipe is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#name Pipe#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#schema Pipe#schema}

---

##### `AutoIngest`<sup>Optional</sup> <a name="AutoIngest" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.autoIngest"></a>

```go
AutoIngest interface{}
```

- *Type:* interface{}

Specifies a auto_ingest param for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#auto_ingest Pipe#auto_ingest}

---

##### `AwsSnsTopicArn`<sup>Optional</sup> <a name="AwsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.awsSnsTopicArn"></a>

```go
AwsSnsTopicArn *string
```

- *Type:* *string

Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#aws_sns_topic_arn Pipe#aws_sns_topic_arn}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#comment Pipe#comment}

---

##### `ErrorIntegration`<sup>Optional</sup> <a name="ErrorIntegration" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.errorIntegration"></a>

```go
ErrorIntegration *string
```

- *Type:* *string

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#error_integration Pipe#error_integration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#id Pipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Integration`<sup>Optional</sup> <a name="Integration" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.integration"></a>

```go
Integration *string
```

- *Type:* *string

Specifies an integration for the pipe.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/pipe#integration Pipe#integration}

---


