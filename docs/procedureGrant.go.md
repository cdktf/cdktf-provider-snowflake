# `procedureGrant` Submodule <a name="`procedureGrant` Submodule" id="@cdktf/provider-snowflake.procedureGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedureGrant <a name="ProcedureGrant" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant snowflake_procedure_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

proceduregrant.NewProcedureGrant(scope Construct, id *string, config ProcedureGrantConfig) ProcedureGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig">ProcedureGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig">ProcedureGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetArgumentDataTypes">ResetArgumentDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOnFuture">ResetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetProcedureName">ResetProcedureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetReturnType">ResetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetShares">ResetShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.putArguments"></a>

```go
func PutArguments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.putArguments.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgumentDataTypes` <a name="ResetArgumentDataTypes" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetArgumentDataTypes"></a>

```go
func ResetArgumentDataTypes()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetEnableMultipleGrants"></a>

```go
func ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetOnFuture` <a name="ResetOnFuture" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOnFuture"></a>

```go
func ResetOnFuture()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetPrivilege"></a>

```go
func ResetPrivilege()
```

##### `ResetProcedureName` <a name="ResetProcedureName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetProcedureName"></a>

```go
func ResetProcedureName()
```

##### `ResetReturnType` <a name="ResetReturnType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetReturnType"></a>

```go
func ResetReturnType()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetShares` <a name="ResetShares" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetShares"></a>

```go
func ResetShares()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetWithGrantOption"></a>

```go
func ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

proceduregrant.ProcedureGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

proceduregrant.ProcedureGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

proceduregrant.ProcedureGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList">ProcedureGrantArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypesInput">ArgumentDataTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentsInput">ArgumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFutureInput">OnFutureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureNameInput">ProcedureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.returnTypeInput">ReturnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.sharesInput">SharesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypes">ArgumentDataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFuture">OnFuture</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilege">Privilege</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureName">ProcedureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.returnType">ReturnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.shares">Shares</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.arguments"></a>

```go
func Arguments() ProcedureGrantArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList">ProcedureGrantArgumentsList</a>

---

##### `ArgumentDataTypesInput`<sup>Optional</sup> <a name="ArgumentDataTypesInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypesInput"></a>

```go
func ArgumentDataTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentsInput"></a>

```go
func ArgumentsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrantsInput"></a>

```go
func EnableMultipleGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnFutureInput`<sup>Optional</sup> <a name="OnFutureInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFutureInput"></a>

```go
func OnFutureInput() interface{}
```

- *Type:* interface{}

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilegeInput"></a>

```go
func PrivilegeInput() *string
```

- *Type:* *string

---

##### `ProcedureNameInput`<sup>Optional</sup> <a name="ProcedureNameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureNameInput"></a>

```go
func ProcedureNameInput() *string
```

- *Type:* *string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.returnTypeInput"></a>

```go
func ReturnTypeInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SharesInput`<sup>Optional</sup> <a name="SharesInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.sharesInput"></a>

```go
func SharesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOptionInput"></a>

```go
func WithGrantOptionInput() interface{}
```

- *Type:* interface{}

---

##### `ArgumentDataTypes`<sup>Required</sup> <a name="ArgumentDataTypes" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypes"></a>

```go
func ArgumentDataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrants"></a>

```go
func EnableMultipleGrants() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnFuture`<sup>Required</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFuture"></a>

```go
func OnFuture() interface{}
```

- *Type:* interface{}

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilege"></a>

```go
func Privilege() *string
```

- *Type:* *string

---

##### `ProcedureName`<sup>Required</sup> <a name="ProcedureName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureName"></a>

```go
func ProcedureName() *string
```

- *Type:* *string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.returnType"></a>

```go
func ReturnType() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Shares`<sup>Required</sup> <a name="Shares" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.shares"></a>

```go
func Shares() *[]*string
```

- *Type:* *[]*string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOption"></a>

```go
func WithGrantOption() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureGrantArguments <a name="ProcedureGrantArguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArguments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

&proceduregrant.ProcedureGrantArguments {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArguments.property.name">Name</a></code> | <code>*string</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArguments.property.type">Type</a></code> | <code>*string</code> | The argument type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArguments.property.name"></a>

```go
Name *string
```

- *Type:* *string

The argument name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#name ProcedureGrant#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArguments.property.type"></a>

```go
Type *string
```

- *Type:* *string

The argument type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#type ProcedureGrant#type}

---

### ProcedureGrantConfig <a name="ProcedureGrantConfig" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

&proceduregrant.ProcedureGrantConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	Roles: *[]*string,
	ArgumentDataTypes: *[]*string,
	Arguments: interface{},
	EnableMultipleGrants: interface{},
	Id: *string,
	OnFuture: interface{},
	Privilege: *string,
	ProcedureName: *string,
	ReturnType: *string,
	SchemaName: *string,
	Shares: *[]*string,
	WithGrantOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database containing the current or future procedures on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.argumentDataTypes">ArgumentDataTypes</a></code> | <code>*[]*string</code> | List of the argument data types for the procedure (must be present if procedure has arguments and procedure_name is present). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.arguments">Arguments</a></code> | <code>interface{}</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#id ProcedureGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.onFuture">OnFuture</a></code> | <code>interface{}</code> | When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.privilege">Privilege</a></code> | <code>*string</code> | The privilege to grant on the current or future procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.procedureName">ProcedureName</a></code> | <code>*string</code> | The name of the procedure on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.returnType">ReturnType</a></code> | <code>*string</code> | The return type of the procedure (must be present if procedure_name is present). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | The name of the schema containing the current or future procedures on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.shares">Shares</a></code> | <code>*[]*string</code> | Grants privilege to these shares (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database containing the current or future procedures on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#database_name ProcedureGrant#database_name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#roles ProcedureGrant#roles}

---

##### `ArgumentDataTypes`<sup>Optional</sup> <a name="ArgumentDataTypes" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.argumentDataTypes"></a>

```go
ArgumentDataTypes *[]*string
```

- *Type:* *[]*string

List of the argument data types for the procedure (must be present if procedure has arguments and procedure_name is present).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#argument_data_types ProcedureGrant#argument_data_types}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.arguments"></a>

```go
Arguments interface{}
```

- *Type:* interface{}

arguments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#arguments ProcedureGrant#arguments}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.enableMultipleGrants"></a>

```go
EnableMultipleGrants interface{}
```

- *Type:* interface{}

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#enable_multiple_grants ProcedureGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#id ProcedureGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnFuture`<sup>Optional</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.onFuture"></a>

```go
OnFuture interface{}
```

- *Type:* interface{}

When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema.

When this is true and no schema_name is provided apply this grant on all future procedures in the given database. The procedure_name and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#on_future ProcedureGrant#on_future}

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.privilege"></a>

```go
Privilege *string
```

- *Type:* *string

The privilege to grant on the current or future procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#privilege ProcedureGrant#privilege}

---

##### `ProcedureName`<sup>Optional</sup> <a name="ProcedureName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.procedureName"></a>

```go
ProcedureName *string
```

- *Type:* *string

The name of the procedure on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#procedure_name ProcedureGrant#procedure_name}

---

##### `ReturnType`<sup>Optional</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.returnType"></a>

```go
ReturnType *string
```

- *Type:* *string

The return type of the procedure (must be present if procedure_name is present).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#return_type ProcedureGrant#return_type}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The name of the schema containing the current or future procedures on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#schema_name ProcedureGrant#schema_name}

---

##### `Shares`<sup>Optional</sup> <a name="Shares" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.shares"></a>

```go
Shares *[]*string
```

- *Type:* *[]*string

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#shares ProcedureGrant#shares}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.withGrantOption"></a>

```go
WithGrantOption interface{}
```

- *Type:* interface{}

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#with_grant_option ProcedureGrant#with_grant_option}

---

## Classes <a name="Classes" id="Classes"></a>

### ProcedureGrantArgumentsList <a name="ProcedureGrantArgumentsList" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

proceduregrant.NewProcedureGrantArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProcedureGrantArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.get"></a>

```go
func Get(index *f64) ProcedureGrantArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProcedureGrantArgumentsOutputReference <a name="ProcedureGrantArgumentsOutputReference" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/proceduregrant"

proceduregrant.NewProcedureGrantArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProcedureGrantArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


