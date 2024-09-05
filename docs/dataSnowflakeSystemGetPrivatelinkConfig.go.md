# `dataSnowflakeSystemGetPrivatelinkConfig` Submodule <a name="`dataSnowflakeSystemGetPrivatelinkConfig` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetPrivatelinkConfig <a name="DataSnowflakeSystemGetPrivatelinkConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/data-sources/system_get_privatelink_config snowflake_system_get_privatelink_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/datasnowflakesystemgetprivatelinkconfig"

datasnowflakesystemgetprivatelinkconfig.NewDataSnowflakeSystemGetPrivatelinkConfig(scope Construct, id *string, config DataSnowflakeSystemGetPrivatelinkConfigConfig) DataSnowflakeSystemGetPrivatelinkConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig">DataSnowflakeSystemGetPrivatelinkConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig">DataSnowflakeSystemGetPrivatelinkConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/datasnowflakesystemgetprivatelinkconfig"

datasnowflakesystemgetprivatelinkconfig.DataSnowflakeSystemGetPrivatelinkConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/datasnowflakesystemgetprivatelinkconfig"

datasnowflakesystemgetprivatelinkconfig.DataSnowflakeSystemGetPrivatelinkConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/datasnowflakesystemgetprivatelinkconfig"

datasnowflakesystemgetprivatelinkconfig.DataSnowflakeSystemGetPrivatelinkConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/datasnowflakesystemgetprivatelinkconfig"

datasnowflakesystemgetprivatelinkconfig.DataSnowflakeSystemGetPrivatelinkConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeSystemGetPrivatelinkConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeSystemGetPrivatelinkConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/data-sources/system_get_privatelink_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetPrivatelinkConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl">AccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId">AwsVpceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId">AzurePlsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.internalStage">InternalStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.ocspUrl">OcspUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessAccountUrl">RegionlessAccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessSnowsightUrl">RegionlessSnowsightUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.snowsightUrl">SnowsightUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AccountUrl`<sup>Required</sup> <a name="AccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl"></a>

```go
func AccountUrl() *string
```

- *Type:* *string

---

##### `AwsVpceId`<sup>Required</sup> <a name="AwsVpceId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId"></a>

```go
func AwsVpceId() *string
```

- *Type:* *string

---

##### `AzurePlsId`<sup>Required</sup> <a name="AzurePlsId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId"></a>

```go
func AzurePlsId() *string
```

- *Type:* *string

---

##### `InternalStage`<sup>Required</sup> <a name="InternalStage" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.internalStage"></a>

```go
func InternalStage() *string
```

- *Type:* *string

---

##### `OcspUrl`<sup>Required</sup> <a name="OcspUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.ocspUrl"></a>

```go
func OcspUrl() *string
```

- *Type:* *string

---

##### `RegionlessAccountUrl`<sup>Required</sup> <a name="RegionlessAccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessAccountUrl"></a>

```go
func RegionlessAccountUrl() *string
```

- *Type:* *string

---

##### `RegionlessSnowsightUrl`<sup>Required</sup> <a name="RegionlessSnowsightUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessSnowsightUrl"></a>

```go
func RegionlessSnowsightUrl() *string
```

- *Type:* *string

---

##### `SnowsightUrl`<sup>Required</sup> <a name="SnowsightUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.snowsightUrl"></a>

```go
func SnowsightUrl() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetPrivatelinkConfigConfig <a name="DataSnowflakeSystemGetPrivatelinkConfigConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/datasnowflakesystemgetprivatelinkconfig"

&datasnowflakesystemgetprivatelinkconfig.DataSnowflakeSystemGetPrivatelinkConfigConfig {
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
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



