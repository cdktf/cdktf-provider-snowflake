# `data_snowflake_sequences`

Refer to the Terraform Registory for docs: [`data_snowflake_sequences`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/sequences).

# `dataSnowflakeSequences` Submodule <a name="`dataSnowflakeSequences` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSequences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSequences <a name="DataSnowflakeSequences" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/sequences snowflake_sequences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

datasnowflakesequences.NewDataSnowflakeSequences(scope Construct, id *string, config DataSnowflakeSequencesConfig) DataSnowflakeSequences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig">DataSnowflakeSequencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig">DataSnowflakeSequencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

datasnowflakesequences.DataSnowflakeSequences_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

datasnowflakesequences.DataSnowflakeSequences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

datasnowflakesequences.DataSnowflakeSequences_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.sequences">Sequences</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList">DataSnowflakeSequencesSequencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Sequences`<sup>Required</sup> <a name="Sequences" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.sequences"></a>

```go
func Sequences() DataSnowflakeSequencesSequencesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList">DataSnowflakeSequencesSequencesList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSequencesConfig <a name="DataSnowflakeSequencesConfig" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

&datasnowflakesequences.DataSnowflakeSequencesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Schema: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.database">Database</a></code> | <code>*string</code> | The database from which to return the schemas from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema from which to return the sequences from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/sequences#id DataSnowflakeSequences#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/sequences#database DataSnowflakeSequences#database}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema from which to return the sequences from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/sequences#schema DataSnowflakeSequences#schema}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/sequences#id DataSnowflakeSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeSequencesSequences <a name="DataSnowflakeSequencesSequences" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

&datasnowflakesequences.DataSnowflakeSequencesSequences {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeSequencesSequencesList <a name="DataSnowflakeSequencesSequencesList" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

datasnowflakesequences.NewDataSnowflakeSequencesSequencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeSequencesSequencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.get"></a>

```go
func Get(index *f64) DataSnowflakeSequencesSequencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeSequencesSequencesOutputReference <a name="DataSnowflakeSequencesSequencesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakesequences"

datasnowflakesequences.NewDataSnowflakeSequencesSequencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeSequencesSequencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequences">DataSnowflakeSequencesSequences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeSequencesSequences
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSequences.DataSnowflakeSequencesSequences">DataSnowflakeSequencesSequences</a>

---



