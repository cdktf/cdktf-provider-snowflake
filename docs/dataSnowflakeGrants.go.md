# `dataSnowflakeGrants` Submodule <a name="`dataSnowflakeGrants` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeGrants <a name="DataSnowflakeGrants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants snowflake_grants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrants(scope Construct, id *string, config DataSnowflakeGrantsConfig) DataSnowflakeGrants
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig">DataSnowflakeGrantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig">DataSnowflakeGrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn">PutFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo">PutFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf">PutGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn">PutGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo">PutGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsIn">ResetFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsTo">ResetFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOf">ResetGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOn">ResetGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsTo">ResetGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFutureGrantsIn` <a name="PutFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn"></a>

```go
func PutFutureGrantsIn(value DataSnowflakeGrantsFutureGrantsIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---

##### `PutFutureGrantsTo` <a name="PutFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo"></a>

```go
func PutFutureGrantsTo(value DataSnowflakeGrantsFutureGrantsTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---

##### `PutGrantsOf` <a name="PutGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf"></a>

```go
func PutGrantsOf(value DataSnowflakeGrantsGrantsOf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---

##### `PutGrantsOn` <a name="PutGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn"></a>

```go
func PutGrantsOn(value DataSnowflakeGrantsGrantsOn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---

##### `PutGrantsTo` <a name="PutGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo"></a>

```go
func PutGrantsTo(value DataSnowflakeGrantsGrantsTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---

##### `ResetFutureGrantsIn` <a name="ResetFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsIn"></a>

```go
func ResetFutureGrantsIn()
```

##### `ResetFutureGrantsTo` <a name="ResetFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsTo"></a>

```go
func ResetFutureGrantsTo()
```

##### `ResetGrantsOf` <a name="ResetGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOf"></a>

```go
func ResetGrantsOf()
```

##### `ResetGrantsOn` <a name="ResetGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOn"></a>

```go
func ResetGrantsOn()
```

##### `ResetGrantsTo` <a name="ResetGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsTo"></a>

```go
func ResetGrantsTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeGrants resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.DataSnowflakeGrants_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.DataSnowflakeGrants_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.DataSnowflakeGrants_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.DataSnowflakeGrants_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeGrants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeGrants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsIn">FutureGrantsIn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference">DataSnowflakeGrantsFutureGrantsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsTo">FutureGrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference">DataSnowflakeGrantsFutureGrantsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grants">Grants</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList">DataSnowflakeGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOf">GrantsOf</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference">DataSnowflakeGrantsGrantsOfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOn">GrantsOn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference">DataSnowflakeGrantsGrantsOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsTo">GrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference">DataSnowflakeGrantsGrantsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsInInput">FutureGrantsInInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsToInput">FutureGrantsToInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOfInput">GrantsOfInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOnInput">GrantsOnInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsToInput">GrantsToInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FutureGrantsIn`<sup>Required</sup> <a name="FutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsIn"></a>

```go
func FutureGrantsIn() DataSnowflakeGrantsFutureGrantsInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference">DataSnowflakeGrantsFutureGrantsInOutputReference</a>

---

##### `FutureGrantsTo`<sup>Required</sup> <a name="FutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsTo"></a>

```go
func FutureGrantsTo() DataSnowflakeGrantsFutureGrantsToOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference">DataSnowflakeGrantsFutureGrantsToOutputReference</a>

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grants"></a>

```go
func Grants() DataSnowflakeGrantsGrantsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList">DataSnowflakeGrantsGrantsList</a>

---

##### `GrantsOf`<sup>Required</sup> <a name="GrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOf"></a>

```go
func GrantsOf() DataSnowflakeGrantsGrantsOfOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference">DataSnowflakeGrantsGrantsOfOutputReference</a>

---

##### `GrantsOn`<sup>Required</sup> <a name="GrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOn"></a>

```go
func GrantsOn() DataSnowflakeGrantsGrantsOnOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference">DataSnowflakeGrantsGrantsOnOutputReference</a>

---

##### `GrantsTo`<sup>Required</sup> <a name="GrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsTo"></a>

```go
func GrantsTo() DataSnowflakeGrantsGrantsToOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference">DataSnowflakeGrantsGrantsToOutputReference</a>

---

##### `FutureGrantsInInput`<sup>Optional</sup> <a name="FutureGrantsInInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsInInput"></a>

```go
func FutureGrantsInInput() DataSnowflakeGrantsFutureGrantsIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---

##### `FutureGrantsToInput`<sup>Optional</sup> <a name="FutureGrantsToInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsToInput"></a>

```go
func FutureGrantsToInput() DataSnowflakeGrantsFutureGrantsTo
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---

##### `GrantsOfInput`<sup>Optional</sup> <a name="GrantsOfInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOfInput"></a>

```go
func GrantsOfInput() DataSnowflakeGrantsGrantsOf
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---

##### `GrantsOnInput`<sup>Optional</sup> <a name="GrantsOnInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOnInput"></a>

```go
func GrantsOnInput() DataSnowflakeGrantsGrantsOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---

##### `GrantsToInput`<sup>Optional</sup> <a name="GrantsToInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsToInput"></a>

```go
func GrantsToInput() DataSnowflakeGrantsGrantsTo
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeGrantsConfig <a name="DataSnowflakeGrantsConfig" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FutureGrantsIn: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn,
	FutureGrantsTo: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo,
	GrantsOf: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf,
	GrantsOn: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn,
	GrantsTo: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsIn">FutureGrantsIn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | future_grants_in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsTo">FutureGrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | future_grants_to block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOf">GrantsOf</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | grants_of block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOn">GrantsOn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | grants_on block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsTo">GrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | grants_to block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#id DataSnowflakeGrants#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FutureGrantsIn`<sup>Optional</sup> <a name="FutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsIn"></a>

```go
FutureGrantsIn DataSnowflakeGrantsFutureGrantsIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

future_grants_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#future_grants_in DataSnowflakeGrants#future_grants_in}

---

##### `FutureGrantsTo`<sup>Optional</sup> <a name="FutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsTo"></a>

```go
FutureGrantsTo DataSnowflakeGrantsFutureGrantsTo
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

future_grants_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#future_grants_to DataSnowflakeGrants#future_grants_to}

---

##### `GrantsOf`<sup>Optional</sup> <a name="GrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOf"></a>

```go
GrantsOf DataSnowflakeGrantsGrantsOf
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

grants_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#grants_of DataSnowflakeGrants#grants_of}

---

##### `GrantsOn`<sup>Optional</sup> <a name="GrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOn"></a>

```go
GrantsOn DataSnowflakeGrantsGrantsOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

grants_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#grants_on DataSnowflakeGrants#grants_on}

---

##### `GrantsTo`<sup>Optional</sup> <a name="GrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsTo"></a>

```go
GrantsTo DataSnowflakeGrantsGrantsTo
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

grants_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#grants_to DataSnowflakeGrants#grants_to}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#id DataSnowflakeGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeGrantsFutureGrantsIn <a name="DataSnowflakeGrantsFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsFutureGrantsIn {
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.database">Database</a></code> | <code>*string</code> | Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.schema">Schema</a></code> | <code>*string</code> | Lists all privileges on new (i.e. future) objects of a specified type in the schema granted to a role. Schema must be a fully qualified name ("&lt;db_name&gt;"."&lt;schema_name&gt;"). |

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.database"></a>

```go
Database *string
```

- *Type:* *string

Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#database DataSnowflakeGrants#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Lists all privileges on new (i.e. future) objects of a specified type in the schema granted to a role. Schema must be a fully qualified name ("&lt;db_name&gt;"."&lt;schema_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#schema DataSnowflakeGrants#schema}

---

### DataSnowflakeGrantsFutureGrantsTo <a name="DataSnowflakeGrantsFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsFutureGrantsTo {
	AccountRole: *string,
	DatabaseRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.accountRole">AccountRole</a></code> | <code>*string</code> | Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the account role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | Lists all privileges on new (i.e. future) objects granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;"). |

---

##### `AccountRole`<sup>Optional</sup> <a name="AccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.accountRole"></a>

```go
AccountRole *string
```

- *Type:* *string

Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}

---

##### `DatabaseRole`<sup>Optional</sup> <a name="DatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.databaseRole"></a>

```go
DatabaseRole *string
```

- *Type:* *string

Lists all privileges on new (i.e. future) objects granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}

---

### DataSnowflakeGrantsGrants <a name="DataSnowflakeGrantsGrants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsGrants {

}
```


### DataSnowflakeGrantsGrantsOf <a name="DataSnowflakeGrantsGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsGrantsOf {
	AccountRole: *string,
	ApplicationRole: *string,
	DatabaseRole: *string,
	Share: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.accountRole">AccountRole</a></code> | <code>*string</code> | Lists all users and roles to which the account role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.applicationRole">ApplicationRole</a></code> | <code>*string</code> | Lists all the users and roles to which the application role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | Lists all users and roles to which the database role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.share">Share</a></code> | <code>*string</code> | Lists all the accounts for the share and indicates the accounts that are using the share. |

---

##### `AccountRole`<sup>Optional</sup> <a name="AccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.accountRole"></a>

```go
AccountRole *string
```

- *Type:* *string

Lists all users and roles to which the account role has been granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}

---

##### `ApplicationRole`<sup>Optional</sup> <a name="ApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.applicationRole"></a>

```go
ApplicationRole *string
```

- *Type:* *string

Lists all the users and roles to which the application role has been granted.

Must be a fully qualified name ("<db_name>"."<database_role_name>").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#application_role DataSnowflakeGrants#application_role}

---

##### `DatabaseRole`<sup>Optional</sup> <a name="DatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.databaseRole"></a>

```go
DatabaseRole *string
```

- *Type:* *string

Lists all users and roles to which the database role has been granted.

Must be a fully qualified name ("<db_name>"."<database_role_name>").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.share"></a>

```go
Share *string
```

- *Type:* *string

Lists all the accounts for the share and indicates the accounts that are using the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#share DataSnowflakeGrants#share}

---

### DataSnowflakeGrantsGrantsOn <a name="DataSnowflakeGrantsGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsGrantsOn {
	Account: interface{},
	ObjectName: *string,
	ObjectType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.account">Account</a></code> | <code>interface{}</code> | Object hierarchy to list privileges on. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectName">ObjectName</a></code> | <code>*string</code> | Name of object to list privileges on. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectType">ObjectType</a></code> | <code>*string</code> | Type of object to list privileges on. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.account"></a>

```go
Account interface{}
```

- *Type:* interface{}

Object hierarchy to list privileges on.

The only valid value is: ACCOUNT. Setting this attribute lists all the account-level (i.e. global) privileges that have been granted to roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#account DataSnowflakeGrants#account}

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectName"></a>

```go
ObjectName *string
```

- *Type:* *string

Name of object to list privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#object_name DataSnowflakeGrants#object_name}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Type of object to list privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#object_type DataSnowflakeGrants#object_type}

---

### DataSnowflakeGrantsGrantsTo <a name="DataSnowflakeGrantsGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsGrantsTo {
	AccountRole: *string,
	Application: *string,
	ApplicationRole: *string,
	DatabaseRole: *string,
	Share: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.accountRole">AccountRole</a></code> | <code>*string</code> | Lists all privileges and roles granted to the role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.application">Application</a></code> | <code>*string</code> | Lists all the privileges and roles granted to the application. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.applicationRole">ApplicationRole</a></code> | <code>*string</code> | Lists all the privileges and roles granted to the application role. Must be a fully qualified name ("&lt;app_name&gt;"."&lt;app_role_name&gt;"). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | Lists all privileges and roles granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;"). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.share">Share</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a></code> | share block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.user">User</a></code> | <code>*string</code> | Lists all the roles granted to the user. |

---

##### `AccountRole`<sup>Optional</sup> <a name="AccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.accountRole"></a>

```go
AccountRole *string
```

- *Type:* *string

Lists all privileges and roles granted to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.application"></a>

```go
Application *string
```

- *Type:* *string

Lists all the privileges and roles granted to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#application DataSnowflakeGrants#application}

---

##### `ApplicationRole`<sup>Optional</sup> <a name="ApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.applicationRole"></a>

```go
ApplicationRole *string
```

- *Type:* *string

Lists all the privileges and roles granted to the application role. Must be a fully qualified name ("&lt;app_name&gt;"."&lt;app_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#application_role DataSnowflakeGrants#application_role}

---

##### `DatabaseRole`<sup>Optional</sup> <a name="DatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.databaseRole"></a>

```go
DatabaseRole *string
```

- *Type:* *string

Lists all privileges and roles granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.share"></a>

```go
Share DataSnowflakeGrantsGrantsToShare
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

share block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#share DataSnowflakeGrants#share}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.user"></a>

```go
User *string
```

- *Type:* *string

Lists all the roles granted to the user.

Note that the PUBLIC role, which is automatically available to every user, is not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#user DataSnowflakeGrants#user}

---

### DataSnowflakeGrantsGrantsToShare <a name="DataSnowflakeGrantsGrantsToShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

&datasnowflakegrants.DataSnowflakeGrantsGrantsToShare {
	ShareName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare.property.shareName">ShareName</a></code> | <code>*string</code> | Lists all of the privileges and roles granted to the specified share. |

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Lists all of the privileges and roles granted to the specified share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/data-sources/grants#share_name DataSnowflakeGrants#share_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeGrantsFutureGrantsInOutputReference <a name="DataSnowflakeGrantsFutureGrantsInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsFutureGrantsInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeGrantsFutureGrantsInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsFutureGrantsIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---


### DataSnowflakeGrantsFutureGrantsToOutputReference <a name="DataSnowflakeGrantsFutureGrantsToOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsFutureGrantsToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeGrantsFutureGrantsToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetAccountRole">ResetAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetDatabaseRole">ResetDatabaseRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountRole` <a name="ResetAccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetAccountRole"></a>

```go
func ResetAccountRole()
```

##### `ResetDatabaseRole` <a name="ResetDatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetDatabaseRole"></a>

```go
func ResetDatabaseRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRoleInput">AccountRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRoleInput">DatabaseRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRole">AccountRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountRoleInput`<sup>Optional</sup> <a name="AccountRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRoleInput"></a>

```go
func AccountRoleInput() *string
```

- *Type:* *string

---

##### `DatabaseRoleInput`<sup>Optional</sup> <a name="DatabaseRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRoleInput"></a>

```go
func DatabaseRoleInput() *string
```

- *Type:* *string

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRole"></a>

```go
func AccountRole() *string
```

- *Type:* *string

---

##### `DatabaseRole`<sup>Required</sup> <a name="DatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRole"></a>

```go
func DatabaseRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsFutureGrantsTo
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---


### DataSnowflakeGrantsGrantsList <a name="DataSnowflakeGrantsGrantsList" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeGrantsGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get"></a>

```go
func Get(index *f64) DataSnowflakeGrantsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeGrantsGrantsOfOutputReference <a name="DataSnowflakeGrantsGrantsOfOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsGrantsOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeGrantsGrantsOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetAccountRole">ResetAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetApplicationRole">ResetApplicationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetDatabaseRole">ResetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetShare">ResetShare</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountRole` <a name="ResetAccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetAccountRole"></a>

```go
func ResetAccountRole()
```

##### `ResetApplicationRole` <a name="ResetApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetApplicationRole"></a>

```go
func ResetApplicationRole()
```

##### `ResetDatabaseRole` <a name="ResetDatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetDatabaseRole"></a>

```go
func ResetDatabaseRole()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetShare"></a>

```go
func ResetShare()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRoleInput">AccountRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRoleInput">ApplicationRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRoleInput">DatabaseRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.shareInput">ShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRole">AccountRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRole">ApplicationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.share">Share</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountRoleInput`<sup>Optional</sup> <a name="AccountRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRoleInput"></a>

```go
func AccountRoleInput() *string
```

- *Type:* *string

---

##### `ApplicationRoleInput`<sup>Optional</sup> <a name="ApplicationRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRoleInput"></a>

```go
func ApplicationRoleInput() *string
```

- *Type:* *string

---

##### `DatabaseRoleInput`<sup>Optional</sup> <a name="DatabaseRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRoleInput"></a>

```go
func DatabaseRoleInput() *string
```

- *Type:* *string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.shareInput"></a>

```go
func ShareInput() *string
```

- *Type:* *string

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRole"></a>

```go
func AccountRole() *string
```

- *Type:* *string

---

##### `ApplicationRole`<sup>Required</sup> <a name="ApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRole"></a>

```go
func ApplicationRole() *string
```

- *Type:* *string

---

##### `DatabaseRole`<sup>Required</sup> <a name="DatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRole"></a>

```go
func DatabaseRole() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.share"></a>

```go
func Share() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsGrantsOf
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---


### DataSnowflakeGrantsGrantsOnOutputReference <a name="DataSnowflakeGrantsGrantsOnOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsGrantsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeGrantsGrantsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectType">ResetObjectType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetObjectName` <a name="ResetObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectName"></a>

```go
func ResetObjectName()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectType"></a>

```go
func ResetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.accountInput">AccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.account">Account</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.accountInput"></a>

```go
func AccountInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectNameInput"></a>

```go
func ObjectNameInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.account"></a>

```go
func Account() interface{}
```

- *Type:* interface{}

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsGrantsOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---


### DataSnowflakeGrantsGrantsOutputReference <a name="DataSnowflakeGrantsGrantsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeGrantsGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedBy">GrantedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedOn">GrantedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedTo">GrantedTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.granteeName">GranteeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantOption">GrantOption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.privilege">Privilege</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants">DataSnowflakeGrantsGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `GrantedBy`<sup>Required</sup> <a name="GrantedBy" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedBy"></a>

```go
func GrantedBy() *string
```

- *Type:* *string

---

##### `GrantedOn`<sup>Required</sup> <a name="GrantedOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedOn"></a>

```go
func GrantedOn() *string
```

- *Type:* *string

---

##### `GrantedTo`<sup>Required</sup> <a name="GrantedTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedTo"></a>

```go
func GrantedTo() *string
```

- *Type:* *string

---

##### `GranteeName`<sup>Required</sup> <a name="GranteeName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.granteeName"></a>

```go
func GranteeName() *string
```

- *Type:* *string

---

##### `GrantOption`<sup>Required</sup> <a name="GrantOption" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantOption"></a>

```go
func GrantOption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.privilege"></a>

```go
func Privilege() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsGrants
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants">DataSnowflakeGrantsGrants</a>

---


### DataSnowflakeGrantsGrantsToOutputReference <a name="DataSnowflakeGrantsGrantsToOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsGrantsToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeGrantsGrantsToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.putShare">PutShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetAccountRole">ResetAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplicationRole">ResetApplicationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetDatabaseRole">ResetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetShare">ResetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShare` <a name="PutShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.putShare"></a>

```go
func PutShare(value DataSnowflakeGrantsGrantsToShare)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.putShare.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

---

##### `ResetAccountRole` <a name="ResetAccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetAccountRole"></a>

```go
func ResetAccountRole()
```

##### `ResetApplication` <a name="ResetApplication" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplication"></a>

```go
func ResetApplication()
```

##### `ResetApplicationRole` <a name="ResetApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplicationRole"></a>

```go
func ResetApplicationRole()
```

##### `ResetDatabaseRole` <a name="ResetDatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetDatabaseRole"></a>

```go
func ResetDatabaseRole()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetShare"></a>

```go
func ResetShare()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.share">Share</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference">DataSnowflakeGrantsGrantsToShareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRoleInput">AccountRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRoleInput">ApplicationRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRoleInput">DatabaseRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.shareInput">ShareInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRole">AccountRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRole">ApplicationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.share"></a>

```go
func Share() DataSnowflakeGrantsGrantsToShareOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference">DataSnowflakeGrantsGrantsToShareOutputReference</a>

---

##### `AccountRoleInput`<sup>Optional</sup> <a name="AccountRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRoleInput"></a>

```go
func AccountRoleInput() *string
```

- *Type:* *string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationInput"></a>

```go
func ApplicationInput() *string
```

- *Type:* *string

---

##### `ApplicationRoleInput`<sup>Optional</sup> <a name="ApplicationRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRoleInput"></a>

```go
func ApplicationRoleInput() *string
```

- *Type:* *string

---

##### `DatabaseRoleInput`<sup>Optional</sup> <a name="DatabaseRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRoleInput"></a>

```go
func DatabaseRoleInput() *string
```

- *Type:* *string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.shareInput"></a>

```go
func ShareInput() DataSnowflakeGrantsGrantsToShare
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRole"></a>

```go
func AccountRole() *string
```

- *Type:* *string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `ApplicationRole`<sup>Required</sup> <a name="ApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRole"></a>

```go
func ApplicationRole() *string
```

- *Type:* *string

---

##### `DatabaseRole`<sup>Required</sup> <a name="DatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRole"></a>

```go
func DatabaseRole() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsGrantsTo
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---


### DataSnowflakeGrantsGrantsToShareOutputReference <a name="DataSnowflakeGrantsGrantsToShareOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/datasnowflakegrants"

datasnowflakegrants.NewDataSnowflakeGrantsGrantsToShareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeGrantsGrantsToShareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeGrantsGrantsToShare
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

---



