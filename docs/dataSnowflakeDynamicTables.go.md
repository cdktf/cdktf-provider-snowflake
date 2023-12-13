# `dataSnowflakeDynamicTables` Submodule <a name="`dataSnowflakeDynamicTables` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeDynamicTables <a name="DataSnowflakeDynamicTables" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables snowflake_dynamic_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.NewDataSnowflakeDynamicTables(scope Construct, id *string, config DataSnowflakeDynamicTablesConfig) DataSnowflakeDynamicTables
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig">DataSnowflakeDynamicTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig">DataSnowflakeDynamicTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike">PutLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIn` <a name="PutIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn"></a>

```go
func PutIn(value DataSnowflakeDynamicTablesIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---

##### `PutLike` <a name="PutLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike"></a>

```go
func PutLike(value DataSnowflakeDynamicTablesLike)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit"></a>

```go
func PutLimit(value DataSnowflakeDynamicTablesLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetId"></a>

```go
func ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetIn"></a>

```go
func ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetStartsWith"></a>

```go
func ResetStartsWith()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeDynamicTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.DataSnowflakeDynamicTables_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.DataSnowflakeDynamicTables_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.DataSnowflakeDynamicTables_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.DataSnowflakeDynamicTables_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeDynamicTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeDynamicTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeDynamicTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeDynamicTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference">DataSnowflakeDynamicTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.like">Like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference">DataSnowflakeDynamicTablesLikeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference">DataSnowflakeDynamicTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.records">Records</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList">DataSnowflakeDynamicTablesRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.inInput">InInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.likeInput">LikeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWithInput">StartsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.in"></a>

```go
func In() DataSnowflakeDynamicTablesInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference">DataSnowflakeDynamicTablesInOutputReference</a>

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.like"></a>

```go
func Like() DataSnowflakeDynamicTablesLikeOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference">DataSnowflakeDynamicTablesLikeOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limit"></a>

```go
func Limit() DataSnowflakeDynamicTablesLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference">DataSnowflakeDynamicTablesLimitOutputReference</a>

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.records"></a>

```go
func Records() DataSnowflakeDynamicTablesRecordsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList">DataSnowflakeDynamicTablesRecordsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.inInput"></a>

```go
func InInput() DataSnowflakeDynamicTablesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.likeInput"></a>

```go
func LikeInput() DataSnowflakeDynamicTablesLike
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeDynamicTablesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWithInput"></a>

```go
func StartsWithInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeDynamicTablesConfig <a name="DataSnowflakeDynamicTablesConfig" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

&datasnowflakedynamictables.DataSnowflakeDynamicTablesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	In: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn,
	Like: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike,
	Limit: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit,
	StartsWith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.like">Like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | like block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.startsWith">StartsWith</a></code> | <code>*string</code> | Optionally filters the command output based on the characters that appear at the beginning of the object name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.in"></a>

```go
In DataSnowflakeDynamicTablesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#in DataSnowflakeDynamicTables#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.like"></a>

```go
Like DataSnowflakeDynamicTablesLike
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

like block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#like DataSnowflakeDynamicTables#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.limit"></a>

```go
Limit DataSnowflakeDynamicTablesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#limit DataSnowflakeDynamicTables#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.startsWith"></a>

```go
StartsWith *string
```

- *Type:* *string

Optionally filters the command output based on the characters that appear at the beginning of the object name.

The string is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#starts_with DataSnowflakeDynamicTables#starts_with}

---

### DataSnowflakeDynamicTablesIn <a name="DataSnowflakeDynamicTablesIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

&datasnowflakedynamictables.DataSnowflakeDynamicTablesIn {
	Account: interface{},
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.account">Account</a></code> | <code>interface{}</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.database">Database</a></code> | <code>*string</code> | Returns records for the current database in use or for a specified database (db_name). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.schema">Schema</a></code> | <code>*string</code> | Returns records for the current schema in use or a specified schema (schema_name). |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.account"></a>

```go
Account interface{}
```

- *Type:* interface{}

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#account DataSnowflakeDynamicTables#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.database"></a>

```go
Database *string
```

- *Type:* *string

Returns records for the current database in use or for a specified database (db_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#database DataSnowflakeDynamicTables#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Returns records for the current schema in use or a specified schema (schema_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#schema DataSnowflakeDynamicTables#schema}

---

### DataSnowflakeDynamicTablesLike <a name="DataSnowflakeDynamicTablesLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

&datasnowflakedynamictables.DataSnowflakeDynamicTablesLike {
	Pattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.property.pattern">Pattern</a></code> | <code>*string</code> | Filters the command output by object name. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Filters the command output by object name.

The filter uses case-insensitive pattern matching with support for SQL wildcard characters (% and _).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#pattern DataSnowflakeDynamicTables#pattern}

---

### DataSnowflakeDynamicTablesLimit <a name="DataSnowflakeDynamicTablesLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

&datasnowflakedynamictables.DataSnowflakeDynamicTablesLimit {
	From: *string,
	Rows: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.from">From</a></code> | <code>*string</code> | The optional FROM 'name_string' subclause effectively serves as a “cursor” for the results. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.rows">Rows</a></code> | <code>*f64</code> | Specifies the maximum number of rows to return. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

The optional FROM 'name_string' subclause effectively serves as a “cursor” for the results.

This enables fetching the specified number of rows following the first row whose object name matches the specified string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#from DataSnowflakeDynamicTables#from}

---

##### `Rows`<sup>Optional</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

Specifies the maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/data-sources/dynamic_tables#rows DataSnowflakeDynamicTables#rows}

---

### DataSnowflakeDynamicTablesRecords <a name="DataSnowflakeDynamicTablesRecords" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

&datasnowflakedynamictables.DataSnowflakeDynamicTablesRecords {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeDynamicTablesInOutputReference <a name="DataSnowflakeDynamicTablesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.NewDataSnowflakeDynamicTablesInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeDynamicTablesInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.accountInput">AccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.account">Account</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.accountInput"></a>

```go
func AccountInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.account"></a>

```go
func Account() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeDynamicTablesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---


### DataSnowflakeDynamicTablesLikeOutputReference <a name="DataSnowflakeDynamicTablesLikeOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.NewDataSnowflakeDynamicTablesLikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeDynamicTablesLikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeDynamicTablesLike
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---


### DataSnowflakeDynamicTablesLimitOutputReference <a name="DataSnowflakeDynamicTablesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.NewDataSnowflakeDynamicTablesLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeDynamicTablesLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetRows">ResetRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetRows` <a name="ResetRows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetRows"></a>

```go
func ResetRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeDynamicTablesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---


### DataSnowflakeDynamicTablesRecordsList <a name="DataSnowflakeDynamicTablesRecordsList" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.NewDataSnowflakeDynamicTablesRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeDynamicTablesRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get"></a>

```go
func Get(index *f64) DataSnowflakeDynamicTablesRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeDynamicTablesRecordsOutputReference <a name="DataSnowflakeDynamicTablesRecordsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/datasnowflakedynamictables"

datasnowflakedynamictables.NewDataSnowflakeDynamicTablesRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeDynamicTablesRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.automaticClustering">AutomaticClustering</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.bytes">Bytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.clusterBy">ClusterBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.dataTimestamp">DataTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isClone">IsClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isReplica">IsReplica</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.lastSuspendedOn">LastSuspendedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshMode">RefreshMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshModeReason">RefreshModeReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schedulingState">SchedulingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.targetLag">TargetLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.warehouse">Warehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords">DataSnowflakeDynamicTablesRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticClustering`<sup>Required</sup> <a name="AutomaticClustering" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.automaticClustering"></a>

```go
func AutomaticClustering() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.bytes"></a>

```go
func Bytes() *f64
```

- *Type:* *f64

---

##### `ClusterBy`<sup>Required</sup> <a name="ClusterBy" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.clusterBy"></a>

```go
func ClusterBy() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DataTimestamp`<sup>Required</sup> <a name="DataTimestamp" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.dataTimestamp"></a>

```go
func DataTimestamp() *string
```

- *Type:* *string

---

##### `IsClone`<sup>Required</sup> <a name="IsClone" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isClone"></a>

```go
func IsClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsReplica`<sup>Required</sup> <a name="IsReplica" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isReplica"></a>

```go
func IsReplica() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastSuspendedOn`<sup>Required</sup> <a name="LastSuspendedOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.lastSuspendedOn"></a>

```go
func LastSuspendedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `RefreshMode`<sup>Required</sup> <a name="RefreshMode" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshMode"></a>

```go
func RefreshMode() *string
```

- *Type:* *string

---

##### `RefreshModeReason`<sup>Required</sup> <a name="RefreshModeReason" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshModeReason"></a>

```go
func RefreshModeReason() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `SchedulingState`<sup>Required</sup> <a name="SchedulingState" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schedulingState"></a>

```go
func SchedulingState() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TargetLag`<sup>Required</sup> <a name="TargetLag" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.targetLag"></a>

```go
func TargetLag() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.warehouse"></a>

```go
func Warehouse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeDynamicTablesRecords
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords">DataSnowflakeDynamicTablesRecords</a>

---



