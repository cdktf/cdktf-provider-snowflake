# `data_snowflake_external_functions`

Refer to the Terraform Registory for docs: [`data_snowflake_external_functions`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/external_functions).

# `dataSnowflakeExternalFunctions` Submodule <a name="`dataSnowflakeExternalFunctions` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalFunctions <a name="DataSnowflakeExternalFunctions" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/external_functions snowflake_external_functions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

datasnowflakeexternalfunctions.NewDataSnowflakeExternalFunctions(scope Construct, id *string, config DataSnowflakeExternalFunctionsConfig) DataSnowflakeExternalFunctions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig">DataSnowflakeExternalFunctionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig">DataSnowflakeExternalFunctionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

datasnowflakeexternalfunctions.DataSnowflakeExternalFunctions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

datasnowflakeexternalfunctions.DataSnowflakeExternalFunctions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

datasnowflakeexternalfunctions.DataSnowflakeExternalFunctions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.externalFunctions">ExternalFunctions</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList">DataSnowflakeExternalFunctionsExternalFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalFunctions`<sup>Required</sup> <a name="ExternalFunctions" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.externalFunctions"></a>

```go
func ExternalFunctions() DataSnowflakeExternalFunctionsExternalFunctionsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList">DataSnowflakeExternalFunctionsExternalFunctionsList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalFunctionsConfig <a name="DataSnowflakeExternalFunctionsConfig" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

&datasnowflakeexternalfunctions.DataSnowflakeExternalFunctionsConfig {
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
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.database">Database</a></code> | <code>*string</code> | The database from which to return the schemas from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema from which to return the external functions from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/external_functions#id DataSnowflakeExternalFunctions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/external_functions#database DataSnowflakeExternalFunctions#database}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema from which to return the external functions from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/external_functions#schema DataSnowflakeExternalFunctions#schema}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/external_functions#id DataSnowflakeExternalFunctions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeExternalFunctionsExternalFunctions <a name="DataSnowflakeExternalFunctionsExternalFunctions" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

&datasnowflakeexternalfunctions.DataSnowflakeExternalFunctionsExternalFunctions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalFunctionsExternalFunctionsList <a name="DataSnowflakeExternalFunctionsExternalFunctionsList" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

datasnowflakeexternalfunctions.NewDataSnowflakeExternalFunctionsExternalFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalFunctionsExternalFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalFunctionsExternalFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalFunctionsExternalFunctionsOutputReference <a name="DataSnowflakeExternalFunctionsExternalFunctionsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakeexternalfunctions"

datasnowflakeexternalfunctions.NewDataSnowflakeExternalFunctionsExternalFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalFunctionsExternalFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctions">DataSnowflakeExternalFunctionsExternalFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalFunctionsExternalFunctions
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeExternalFunctions.DataSnowflakeExternalFunctionsExternalFunctions">DataSnowflakeExternalFunctionsExternalFunctions</a>

---



