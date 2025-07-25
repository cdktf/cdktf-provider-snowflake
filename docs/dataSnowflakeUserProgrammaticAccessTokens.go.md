# `dataSnowflakeUserProgrammaticAccessTokens` Submodule <a name="`dataSnowflakeUserProgrammaticAccessTokens` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeUserProgrammaticAccessTokens <a name="DataSnowflakeUserProgrammaticAccessTokens" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens snowflake_user_programmatic_access_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.NewDataSnowflakeUserProgrammaticAccessTokens(scope Construct, id *string, config DataSnowflakeUserProgrammaticAccessTokensConfig) DataSnowflakeUserProgrammaticAccessTokens
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig">DataSnowflakeUserProgrammaticAccessTokensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig">DataSnowflakeUserProgrammaticAccessTokensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokens_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokens_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokens_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokens_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeUserProgrammaticAccessTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeUserProgrammaticAccessTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeUserProgrammaticAccessTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.userProgrammaticAccessTokens">UserProgrammaticAccessTokens</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUserInput">ForUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUser">ForUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `UserProgrammaticAccessTokens`<sup>Required</sup> <a name="UserProgrammaticAccessTokens" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.userProgrammaticAccessTokens"></a>

```go
func UserProgrammaticAccessTokens() DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList</a>

---

##### `ForUserInput`<sup>Optional</sup> <a name="ForUserInput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUserInput"></a>

```go
func ForUserInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ForUser`<sup>Required</sup> <a name="ForUser" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUser"></a>

```go
func ForUser() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeUserProgrammaticAccessTokensConfig <a name="DataSnowflakeUserProgrammaticAccessTokensConfig" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

&datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokensConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ForUser: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forUser">ForUser</a></code> | <code>*string</code> | Returns programmatic access tokens for the specified user. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ForUser`<sup>Required</sup> <a name="ForUser" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forUser"></a>

```go
ForUser *string
```

- *Type:* *string

Returns programmatic access tokens for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#for_user DataSnowflakeUserProgrammaticAccessTokens#for_user}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

&datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens {

}
```


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

&datasnowflakeuserprogrammaticaccesstokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.NewDataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get"></a>

```go
func Get(index *f64) DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.NewDataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens</a>

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.NewDataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeuserprogrammaticaccesstokens"

datasnowflakeuserprogrammaticaccesstokens.NewDataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement">MinsToBypassNetworkPolicyRequirement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.roleRestriction">RoleRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.rotatedTo">RotatedTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `MinsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="MinsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement"></a>

```go
func MinsToBypassNetworkPolicyRequirement() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleRestriction`<sup>Required</sup> <a name="RoleRestriction" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.roleRestriction"></a>

```go
func RoleRestriction() *string
```

- *Type:* *string

---

##### `RotatedTo`<sup>Required</sup> <a name="RotatedTo" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.rotatedTo"></a>

```go
func RotatedTo() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput</a>

---



