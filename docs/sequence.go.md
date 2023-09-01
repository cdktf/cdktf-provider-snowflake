# `snowflake_sequence`

Refer to the Terraform Registory for docs: [`snowflake_sequence`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence).

# `sequence` Submodule <a name="`sequence` Submodule" id="@cdktf/provider-snowflake.sequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sequence <a name="Sequence" id="@cdktf/provider-snowflake.sequence.Sequence"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence snowflake_sequence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.sequence.Sequence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequence"

sequence.NewSequence(scope Construct, id *string, config SequenceConfig) Sequence
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig">SequenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.sequence.Sequence.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sequence.Sequence.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.sequence.Sequence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.sequence.SequenceConfig">SequenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.resetIncrement">ResetIncrement</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.sequence.Sequence.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.sequence.Sequence.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.sequence.Sequence.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.sequence.Sequence.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.sequence.Sequence.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.sequence.Sequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.sequence.Sequence.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.sequence.Sequence.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.sequence.Sequence.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequence.Sequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.sequence.Sequence.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.sequence.Sequence.resetId"></a>

```go
func ResetId()
```

##### `ResetIncrement` <a name="ResetIncrement" id="@cdktf/provider-snowflake.sequence.Sequence.resetIncrement"></a>

```go
func ResetIncrement()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.sequence.Sequence.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequence"

sequence.Sequence_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sequence.Sequence.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.sequence.Sequence.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequence"

sequence.Sequence_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sequence.Sequence.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.sequence.Sequence.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequence"

sequence.Sequence_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sequence.Sequence.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.nextValue">NextValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.incrementInput">IncrementInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.increment">Increment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.sequence.Sequence.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.sequence.Sequence.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.sequence.Sequence.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.sequence.Sequence.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.sequence.Sequence.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.sequence.Sequence.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.sequence.Sequence.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.sequence.Sequence.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.sequence.Sequence.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.sequence.Sequence.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.sequence.Sequence.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.sequence.Sequence.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.sequence.Sequence.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.sequence.Sequence.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.sequence.Sequence.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `NextValue`<sup>Required</sup> <a name="NextValue" id="@cdktf/provider-snowflake.sequence.Sequence.property.nextValue"></a>

```go
func NextValue() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.sequence.Sequence.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.sequence.Sequence.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.sequence.Sequence.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncrementInput`<sup>Optional</sup> <a name="IncrementInput" id="@cdktf/provider-snowflake.sequence.Sequence.property.incrementInput"></a>

```go
func IncrementInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.sequence.Sequence.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.sequence.Sequence.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.sequence.Sequence.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.sequence.Sequence.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.sequence.Sequence.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Increment`<sup>Required</sup> <a name="Increment" id="@cdktf/provider-snowflake.sequence.Sequence.property.increment"></a>

```go
func Increment() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.sequence.Sequence.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.sequence.Sequence.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequence.Sequence.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.sequence.Sequence.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SequenceConfig <a name="SequenceConfig" id="@cdktf/provider-snowflake.sequence.SequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.sequence.SequenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequence"

&sequence.SequenceConfig {
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
	Comment: *string,
	Id: *string,
	Increment: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the sequence. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name for the sequence. |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the sequence. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the sequence. |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#id Sequence#id}. |
| <code><a href="#@cdktf/provider-snowflake.sequence.SequenceConfig.property.increment">Increment</a></code> | <code>*f64</code> | The amount the sequence will increase by each time it is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the sequence. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#database Sequence#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name for the sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#name Sequence#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the sequence. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#schema Sequence#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#comment Sequence#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#id Sequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Increment`<sup>Optional</sup> <a name="Increment" id="@cdktf/provider-snowflake.sequence.SequenceConfig.property.increment"></a>

```go
Increment *f64
```

- *Type:* *f64

The amount the sequence will increase by each time it is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence#increment Sequence#increment}

---



