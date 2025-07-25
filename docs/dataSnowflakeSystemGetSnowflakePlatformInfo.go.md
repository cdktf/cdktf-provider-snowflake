# `dataSnowflakeSystemGetSnowflakePlatformInfo` Submodule <a name="`dataSnowflakeSystemGetSnowflakePlatformInfo` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetSnowflakePlatformInfo <a name="DataSnowflakeSystemGetSnowflakePlatformInfo" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakesystemgetsnowflakeplatforminfo"

datasnowflakesystemgetsnowflakeplatforminfo.NewDataSnowflakeSystemGetSnowflakePlatformInfo(scope Construct, id *string, config DataSnowflakeSystemGetSnowflakePlatformInfoConfig) DataSnowflakeSystemGetSnowflakePlatformInfo
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig">DataSnowflakeSystemGetSnowflakePlatformInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig">DataSnowflakeSystemGetSnowflakePlatformInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakesystemgetsnowflakeplatforminfo"

datasnowflakesystemgetsnowflakeplatforminfo.DataSnowflakeSystemGetSnowflakePlatformInfo_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakesystemgetsnowflakeplatforminfo"

datasnowflakesystemgetsnowflakeplatforminfo.DataSnowflakeSystemGetSnowflakePlatformInfo_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakesystemgetsnowflakeplatforminfo"

datasnowflakesystemgetsnowflakeplatforminfo.DataSnowflakeSystemGetSnowflakePlatformInfo_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakesystemgetsnowflakeplatforminfo"

datasnowflakesystemgetsnowflakeplatforminfo.DataSnowflakeSystemGetSnowflakePlatformInfo_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeSystemGetSnowflakePlatformInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeSystemGetSnowflakePlatformInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_get_snowflake_platform_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetSnowflakePlatformInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds">AwsVpcIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds">AzureVnetSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AwsVpcIds`<sup>Required</sup> <a name="AwsVpcIds" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds"></a>

```go
func AwsVpcIds() *[]*string
```

- *Type:* *[]*string

---

##### `AzureVnetSubnetIds`<sup>Required</sup> <a name="AzureVnetSubnetIds" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds"></a>

```go
func AzureVnetSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetSnowflakePlatformInfoConfig <a name="DataSnowflakeSystemGetSnowflakePlatformInfoConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakesystemgetsnowflakeplatforminfo"

&datasnowflakesystemgetsnowflakeplatforminfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



