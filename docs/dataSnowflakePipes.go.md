# `data_snowflake_pipes`

Refer to the Terraform Registory for docs: [`data_snowflake_pipes`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.72.0/docs/data-sources/pipes).

# `dataSnowflakePipes` Submodule <a name="`dataSnowflakePipes` Submodule" id="@cdktf/provider-snowflake.dataSnowflakePipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePipes <a name="DataSnowflakePipes" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.72.0/docs/data-sources/pipes snowflake_pipes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

datasnowflakepipes.NewDataSnowflakePipes(scope Construct, id *string, config DataSnowflakePipesConfig) DataSnowflakePipes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig">DataSnowflakePipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig">DataSnowflakePipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

datasnowflakepipes.DataSnowflakePipes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

datasnowflakepipes.DataSnowflakePipes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

datasnowflakepipes.DataSnowflakePipes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.pipes">Pipes</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList">DataSnowflakePipesPipesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Pipes`<sup>Required</sup> <a name="Pipes" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.pipes"></a>

```go
func Pipes() DataSnowflakePipesPipesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList">DataSnowflakePipesPipesList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePipesConfig <a name="DataSnowflakePipesConfig" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

&datasnowflakepipes.DataSnowflakePipesConfig {
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
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.database">Database</a></code> | <code>*string</code> | The database from which to return the schemas from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema from which to return the pipes from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.72.0/docs/data-sources/pipes#id DataSnowflakePipes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.72.0/docs/data-sources/pipes#database DataSnowflakePipes#database}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema from which to return the pipes from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.72.0/docs/data-sources/pipes#schema DataSnowflakePipes#schema}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.72.0/docs/data-sources/pipes#id DataSnowflakePipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakePipesPipes <a name="DataSnowflakePipesPipes" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

&datasnowflakepipes.DataSnowflakePipesPipes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePipesPipesList <a name="DataSnowflakePipesPipesList" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

datasnowflakepipes.NewDataSnowflakePipesPipesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakePipesPipesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.get"></a>

```go
func Get(index *f64) DataSnowflakePipesPipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakePipesPipesOutputReference <a name="DataSnowflakePipesPipesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakepipes"

datasnowflakepipes.NewDataSnowflakePipesPipesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakePipesPipesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.integration">Integration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipes">DataSnowflakePipesPipes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.integration"></a>

```go
func Integration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakePipesPipes
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakePipes.DataSnowflakePipesPipes">DataSnowflakePipesPipes</a>

---



