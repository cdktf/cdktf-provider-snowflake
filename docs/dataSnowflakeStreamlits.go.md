# `dataSnowflakeStreamlits` Submodule <a name="`dataSnowflakeStreamlits` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeStreamlits <a name="DataSnowflakeStreamlits" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits snowflake_streamlits}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlits(scope Construct, id *string, config DataSnowflakeStreamlitsConfig) DataSnowflakeStreamlits
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig">DataSnowflakeStreamlitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig">DataSnowflakeStreamlitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIn` <a name="PutIn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.putIn"></a>

```go
func PutIn(value DataSnowflakeStreamlitsIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.putLimit"></a>

```go
func PutLimit(value DataSnowflakeStreamlitsLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetId"></a>

```go
func ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetIn"></a>

```go
func ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeStreamlits resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.DataSnowflakeStreamlits_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.DataSnowflakeStreamlits_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.DataSnowflakeStreamlits_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.DataSnowflakeStreamlits_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeStreamlits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeStreamlits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeStreamlits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeStreamlits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference">DataSnowflakeStreamlitsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference">DataSnowflakeStreamlitsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.streamlits">Streamlits</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList">DataSnowflakeStreamlitsStreamlitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.inInput">InInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.in"></a>

```go
func In() DataSnowflakeStreamlitsInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference">DataSnowflakeStreamlitsInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.limit"></a>

```go
func Limit() DataSnowflakeStreamlitsLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference">DataSnowflakeStreamlitsLimitOutputReference</a>

---

##### `Streamlits`<sup>Required</sup> <a name="Streamlits" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.streamlits"></a>

```go
func Streamlits() DataSnowflakeStreamlitsStreamlitsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList">DataSnowflakeStreamlitsStreamlitsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.inInput"></a>

```go
func InInput() DataSnowflakeStreamlitsIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeStreamlitsLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a>

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlits.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeStreamlitsConfig <a name="DataSnowflakeStreamlitsConfig" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

&datasnowflakestreamlits.DataSnowflakeStreamlitsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	In: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn,
	Like: *string,
	Limit: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit,
	WithDescribe: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#id DataSnowflakeStreamlits#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC STREAMLIT for each streamlit returned by SHOW STREAMLITS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#id DataSnowflakeStreamlits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.in"></a>

```go
In DataSnowflakeStreamlitsIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#in DataSnowflakeStreamlits#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#like DataSnowflakeStreamlits#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.limit"></a>

```go
Limit DataSnowflakeStreamlitsLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#limit DataSnowflakeStreamlits#limit}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC STREAMLIT for each streamlit returned by SHOW STREAMLITS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#with_describe DataSnowflakeStreamlits#with_describe}

---

### DataSnowflakeStreamlitsIn <a name="DataSnowflakeStreamlitsIn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

&datasnowflakestreamlits.DataSnowflakeStreamlitsIn {
	Account: interface{},
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.property.account">Account</a></code> | <code>interface{}</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.property.database">Database</a></code> | <code>*string</code> | Returns records for the current database in use or for a specified database (db_name). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.property.schema">Schema</a></code> | <code>*string</code> | Returns records for the current schema in use or a specified schema (schema_name). |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.property.account"></a>

```go
Account interface{}
```

- *Type:* interface{}

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#account DataSnowflakeStreamlits#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.property.database"></a>

```go
Database *string
```

- *Type:* *string

Returns records for the current database in use or for a specified database (db_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#database DataSnowflakeStreamlits#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Returns records for the current schema in use or a specified schema (schema_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#schema DataSnowflakeStreamlits#schema}

---

### DataSnowflakeStreamlitsLimit <a name="DataSnowflakeStreamlitsLimit" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

&datasnowflakestreamlits.DataSnowflakeStreamlitsLimit {
	Rows: *f64,
	From: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit.property.rows">Rows</a></code> | <code>*f64</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit.property.from">From</a></code> | <code>*string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#rows DataSnowflakeStreamlits#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/streamlits#from DataSnowflakeStreamlits#from}

---

### DataSnowflakeStreamlitsStreamlits <a name="DataSnowflakeStreamlitsStreamlits" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

&datasnowflakestreamlits.DataSnowflakeStreamlitsStreamlits {

}
```


### DataSnowflakeStreamlitsStreamlitsDescribeOutput <a name="DataSnowflakeStreamlitsStreamlitsDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

&datasnowflakestreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutput {

}
```


### DataSnowflakeStreamlitsStreamlitsShowOutput <a name="DataSnowflakeStreamlitsStreamlitsShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

&datasnowflakestreamlits.DataSnowflakeStreamlitsStreamlitsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeStreamlitsInOutputReference <a name="DataSnowflakeStreamlitsInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeStreamlitsInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.accountInput">AccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.account">Account</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.accountInput"></a>

```go
func AccountInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.account"></a>

```go
func Account() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsInOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeStreamlitsIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsIn">DataSnowflakeStreamlitsIn</a>

---


### DataSnowflakeStreamlitsLimitOutputReference <a name="DataSnowflakeStreamlitsLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeStreamlitsLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeStreamlitsLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsLimit">DataSnowflakeStreamlitsLimit</a>

---


### DataSnowflakeStreamlitsStreamlitsDescribeOutputList <a name="DataSnowflakeStreamlitsStreamlitsDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsStreamlitsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeStreamlitsStreamlitsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference <a name="DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.defaultPackages">DefaultPackages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.externalAccessSecrets">ExternalAccessSecrets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.importUrls">ImportUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.mainFile">MainFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.queryWarehouse">QueryWarehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.rootLocation">RootLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.urlId">UrlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.userPackages">UserPackages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutput">DataSnowflakeStreamlitsStreamlitsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPackages`<sup>Required</sup> <a name="DefaultPackages" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.defaultPackages"></a>

```go
func DefaultPackages() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalAccessSecrets`<sup>Required</sup> <a name="ExternalAccessSecrets" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.externalAccessSecrets"></a>

```go
func ExternalAccessSecrets() *string
```

- *Type:* *string

---

##### `ImportUrls`<sup>Required</sup> <a name="ImportUrls" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.importUrls"></a>

```go
func ImportUrls() *[]*string
```

- *Type:* *[]*string

---

##### `MainFile`<sup>Required</sup> <a name="MainFile" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.mainFile"></a>

```go
func MainFile() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryWarehouse`<sup>Required</sup> <a name="QueryWarehouse" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.queryWarehouse"></a>

```go
func QueryWarehouse() *string
```

- *Type:* *string

---

##### `RootLocation`<sup>Required</sup> <a name="RootLocation" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.rootLocation"></a>

```go
func RootLocation() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UrlId`<sup>Required</sup> <a name="UrlId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.urlId"></a>

```go
func UrlId() *string
```

- *Type:* *string

---

##### `UserPackages`<sup>Required</sup> <a name="UserPackages" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.userPackages"></a>

```go
func UserPackages() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeStreamlitsStreamlitsDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutput">DataSnowflakeStreamlitsStreamlitsDescribeOutput</a>

---


### DataSnowflakeStreamlitsStreamlitsList <a name="DataSnowflakeStreamlitsStreamlitsList" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsStreamlitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeStreamlitsStreamlitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.get"></a>

```go
func Get(index *f64) DataSnowflakeStreamlitsStreamlitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeStreamlitsStreamlitsOutputReference <a name="DataSnowflakeStreamlitsStreamlitsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsStreamlitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeStreamlitsStreamlitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList">DataSnowflakeStreamlitsStreamlitsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList">DataSnowflakeStreamlitsStreamlitsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlits">DataSnowflakeStreamlitsStreamlits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeStreamlitsStreamlitsDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsDescribeOutputList">DataSnowflakeStreamlitsStreamlitsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeStreamlitsStreamlitsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList">DataSnowflakeStreamlitsStreamlitsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeStreamlitsStreamlits
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlits">DataSnowflakeStreamlitsStreamlits</a>

---


### DataSnowflakeStreamlitsStreamlitsShowOutputList <a name="DataSnowflakeStreamlitsStreamlitsShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsStreamlitsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeStreamlitsStreamlitsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference <a name="DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakestreamlits"

datasnowflakestreamlits.NewDataSnowflakeStreamlitsStreamlitsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.queryWarehouse">QueryWarehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.urlId">UrlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutput">DataSnowflakeStreamlitsStreamlitsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `QueryWarehouse`<sup>Required</sup> <a name="QueryWarehouse" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.queryWarehouse"></a>

```go
func QueryWarehouse() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UrlId`<sup>Required</sup> <a name="UrlId" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.urlId"></a>

```go
func UrlId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeStreamlitsStreamlitsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeStreamlits.DataSnowflakeStreamlitsStreamlitsShowOutput">DataSnowflakeStreamlitsStreamlitsShowOutput</a>

---



