# `dataSnowflakeAccounts` Submodule <a name="`dataSnowflakeAccounts` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeAccounts <a name="DataSnowflakeAccounts" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/accounts snowflake_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.NewDataSnowflakeAccounts(scope Construct, id *string, config DataSnowflakeAccountsConfig) DataSnowflakeAccounts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig">DataSnowflakeAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig">DataSnowflakeAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetWithHistory">ResetWithHistory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetLike"></a>

```go
func ResetLike()
```

##### `ResetWithHistory` <a name="ResetWithHistory" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.resetWithHistory"></a>

```go
func ResetWithHistory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.DataSnowflakeAccounts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.DataSnowflakeAccounts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.DataSnowflakeAccounts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.DataSnowflakeAccounts_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSnowflakeAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeAccounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList">DataSnowflakeAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.withHistoryInput">WithHistoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.withHistory">WithHistory</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.accounts"></a>

```go
func Accounts() DataSnowflakeAccountsAccountsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList">DataSnowflakeAccountsAccountsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `WithHistoryInput`<sup>Optional</sup> <a name="WithHistoryInput" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.withHistoryInput"></a>

```go
func WithHistoryInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `WithHistory`<sup>Required</sup> <a name="WithHistory" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.withHistory"></a>

```go
func WithHistory() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccounts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeAccountsAccounts <a name="DataSnowflakeAccountsAccounts" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

&datasnowflakeaccounts.DataSnowflakeAccountsAccounts {

}
```


### DataSnowflakeAccountsAccountsShowOutput <a name="DataSnowflakeAccountsAccountsShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

&datasnowflakeaccounts.DataSnowflakeAccountsAccountsShowOutput {

}
```


### DataSnowflakeAccountsConfig <a name="DataSnowflakeAccountsConfig" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

&datasnowflakeaccounts.DataSnowflakeAccountsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Like: *string,
	WithHistory: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/accounts#id DataSnowflakeAccounts#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.withHistory">WithHistory</a></code> | <code>interface{}</code> | Includes dropped accounts that have not yet been deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/accounts#id DataSnowflakeAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/accounts#like DataSnowflakeAccounts#like}

---

##### `WithHistory`<sup>Optional</sup> <a name="WithHistory" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsConfig.property.withHistory"></a>

```go
WithHistory interface{}
```

- *Type:* interface{}

Includes dropped accounts that have not yet been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/accounts#with_history DataSnowflakeAccounts#with_history}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeAccountsAccountsList <a name="DataSnowflakeAccountsAccountsList" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.NewDataSnowflakeAccountsAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeAccountsAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.get"></a>

```go
func Get(index *f64) DataSnowflakeAccountsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeAccountsAccountsOutputReference <a name="DataSnowflakeAccountsAccountsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.NewDataSnowflakeAccountsAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeAccountsAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList">DataSnowflakeAccountsAccountsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccounts">DataSnowflakeAccountsAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeAccountsAccountsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList">DataSnowflakeAccountsAccountsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeAccountsAccounts
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccounts">DataSnowflakeAccountsAccounts</a>

---


### DataSnowflakeAccountsAccountsShowOutputList <a name="DataSnowflakeAccountsAccountsShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.NewDataSnowflakeAccountsAccountsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeAccountsAccountsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeAccountsAccountsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeAccountsAccountsShowOutputOutputReference <a name="DataSnowflakeAccountsAccountsShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/datasnowflakeaccounts"

datasnowflakeaccounts.NewDataSnowflakeAccountsAccountsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeAccountsAccountsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountLocator">AccountLocator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountLocatorUrl">AccountLocatorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountOldUrlLastUsed">AccountOldUrlLastUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountOldUrlSavedOn">AccountOldUrlSavedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountUrl">AccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.consumptionBillingEntityName">ConsumptionBillingEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.droppedOn">DroppedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.isEventsAccount">IsEventsAccount</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.isOrgAdmin">IsOrgAdmin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.isOrganizationAccount">IsOrganizationAccount</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.managedAccounts">ManagedAccounts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">MarketplaceConsumerBillingEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.marketplaceProviderBillingEntityName">MarketplaceProviderBillingEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.movedOn">MovedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.movedToOrganization">MovedToOrganization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.oldAccountUrl">OldAccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationOldUrl">OrganizationOldUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationOldUrlLastUsed">OrganizationOldUrlLastUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationOldUrlSavedOn">OrganizationOldUrlSavedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationUrlExpirationOn">OrganizationUrlExpirationOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.regionGroup">RegionGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.restoredOn">RestoredOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.scheduledDeletionTime">ScheduledDeletionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.snowflakeRegion">SnowflakeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutput">DataSnowflakeAccountsAccountsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountLocator`<sup>Required</sup> <a name="AccountLocator" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountLocator"></a>

```go
func AccountLocator() *string
```

- *Type:* *string

---

##### `AccountLocatorUrl`<sup>Required</sup> <a name="AccountLocatorUrl" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountLocatorUrl"></a>

```go
func AccountLocatorUrl() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AccountOldUrlLastUsed`<sup>Required</sup> <a name="AccountOldUrlLastUsed" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```go
func AccountOldUrlLastUsed() *string
```

- *Type:* *string

---

##### `AccountOldUrlSavedOn`<sup>Required</sup> <a name="AccountOldUrlSavedOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```go
func AccountOldUrlSavedOn() *string
```

- *Type:* *string

---

##### `AccountUrl`<sup>Required</sup> <a name="AccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.accountUrl"></a>

```go
func AccountUrl() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConsumptionBillingEntityName`<sup>Required</sup> <a name="ConsumptionBillingEntityName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```go
func ConsumptionBillingEntityName() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DroppedOn`<sup>Required</sup> <a name="DroppedOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.droppedOn"></a>

```go
func DroppedOn() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `IsEventsAccount`<sup>Required</sup> <a name="IsEventsAccount" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.isEventsAccount"></a>

```go
func IsEventsAccount() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOrgAdmin`<sup>Required</sup> <a name="IsOrgAdmin" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.isOrgAdmin"></a>

```go
func IsOrgAdmin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOrganizationAccount`<sup>Required</sup> <a name="IsOrganizationAccount" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.isOrganizationAccount"></a>

```go
func IsOrganizationAccount() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ManagedAccounts`<sup>Required</sup> <a name="ManagedAccounts" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.managedAccounts"></a>

```go
func ManagedAccounts() *f64
```

- *Type:* *f64

---

##### `MarketplaceConsumerBillingEntityName`<sup>Required</sup> <a name="MarketplaceConsumerBillingEntityName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```go
func MarketplaceConsumerBillingEntityName() *string
```

- *Type:* *string

---

##### `MarketplaceProviderBillingEntityName`<sup>Required</sup> <a name="MarketplaceProviderBillingEntityName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```go
func MarketplaceProviderBillingEntityName() *string
```

- *Type:* *string

---

##### `MovedOn`<sup>Required</sup> <a name="MovedOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.movedOn"></a>

```go
func MovedOn() *string
```

- *Type:* *string

---

##### `MovedToOrganization`<sup>Required</sup> <a name="MovedToOrganization" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.movedToOrganization"></a>

```go
func MovedToOrganization() *string
```

- *Type:* *string

---

##### `OldAccountUrl`<sup>Required</sup> <a name="OldAccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.oldAccountUrl"></a>

```go
func OldAccountUrl() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `OrganizationOldUrl`<sup>Required</sup> <a name="OrganizationOldUrl" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationOldUrl"></a>

```go
func OrganizationOldUrl() *string
```

- *Type:* *string

---

##### `OrganizationOldUrlLastUsed`<sup>Required</sup> <a name="OrganizationOldUrlLastUsed" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```go
func OrganizationOldUrlLastUsed() *string
```

- *Type:* *string

---

##### `OrganizationOldUrlSavedOn`<sup>Required</sup> <a name="OrganizationOldUrlSavedOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```go
func OrganizationOldUrlSavedOn() *string
```

- *Type:* *string

---

##### `OrganizationUrlExpirationOn`<sup>Required</sup> <a name="OrganizationUrlExpirationOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.organizationUrlExpirationOn"></a>

```go
func OrganizationUrlExpirationOn() *string
```

- *Type:* *string

---

##### `RegionGroup`<sup>Required</sup> <a name="RegionGroup" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.regionGroup"></a>

```go
func RegionGroup() *string
```

- *Type:* *string

---

##### `RestoredOn`<sup>Required</sup> <a name="RestoredOn" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.restoredOn"></a>

```go
func RestoredOn() *string
```

- *Type:* *string

---

##### `ScheduledDeletionTime`<sup>Required</sup> <a name="ScheduledDeletionTime" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.scheduledDeletionTime"></a>

```go
func ScheduledDeletionTime() *string
```

- *Type:* *string

---

##### `SnowflakeRegion`<sup>Required</sup> <a name="SnowflakeRegion" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.snowflakeRegion"></a>

```go
func SnowflakeRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeAccountsAccountsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccounts.DataSnowflakeAccountsAccountsShowOutput">DataSnowflakeAccountsAccountsShowOutput</a>

---



