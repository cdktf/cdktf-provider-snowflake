# `snowflake_row_access_policy_grant`

Refer to the Terraform Registory for docs: [`snowflake_row_access_policy_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant).

# `rowAccessPolicyGrant` Submodule <a name="`rowAccessPolicyGrant` Submodule" id="@cdktf/provider-snowflake.rowAccessPolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RowAccessPolicyGrant <a name="RowAccessPolicyGrant" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant snowflake_row_access_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/rowaccesspolicygrant"

rowaccesspolicygrant.NewRowAccessPolicyGrant(scope Construct, id *string, config RowAccessPolicyGrantConfig) RowAccessPolicyGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig">RowAccessPolicyGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig">RowAccessPolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetRevertOwnershipToRoleName">ResetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetEnableMultipleGrants"></a>

```go
func ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetPrivilege"></a>

```go
func ResetPrivilege()
```

##### `ResetRevertOwnershipToRoleName` <a name="ResetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetRevertOwnershipToRoleName"></a>

```go
func ResetRevertOwnershipToRoleName()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetRoles"></a>

```go
func ResetRoles()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.resetWithGrantOption"></a>

```go
func ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/rowaccesspolicygrant"

rowaccesspolicygrant.RowAccessPolicyGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/rowaccesspolicygrant"

rowaccesspolicygrant.RowAccessPolicyGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/rowaccesspolicygrant"

rowaccesspolicygrant.RowAccessPolicyGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.revertOwnershipToRoleNameInput">RevertOwnershipToRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.rowAccessPolicyNameInput">RowAccessPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.privilege">Privilege</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.rowAccessPolicyName">RowAccessPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.enableMultipleGrantsInput"></a>

```go
func EnableMultipleGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.privilegeInput"></a>

```go
func PrivilegeInput() *string
```

- *Type:* *string

---

##### `RevertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="RevertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.revertOwnershipToRoleNameInput"></a>

```go
func RevertOwnershipToRoleNameInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RowAccessPolicyNameInput`<sup>Optional</sup> <a name="RowAccessPolicyNameInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.rowAccessPolicyNameInput"></a>

```go
func RowAccessPolicyNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.withGrantOptionInput"></a>

```go
func WithGrantOptionInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.enableMultipleGrants"></a>

```go
func EnableMultipleGrants() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.privilege"></a>

```go
func Privilege() *string
```

- *Type:* *string

---

##### `RevertOwnershipToRoleName`<sup>Required</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.revertOwnershipToRoleName"></a>

```go
func RevertOwnershipToRoleName() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `RowAccessPolicyName`<sup>Required</sup> <a name="RowAccessPolicyName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.rowAccessPolicyName"></a>

```go
func RowAccessPolicyName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.withGrantOption"></a>

```go
func WithGrantOption() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RowAccessPolicyGrantConfig <a name="RowAccessPolicyGrantConfig" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/rowaccesspolicygrant"

&rowaccesspolicygrant.RowAccessPolicyGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	RowAccessPolicyName: *string,
	SchemaName: *string,
	EnableMultipleGrants: interface{},
	Id: *string,
	Privilege: *string,
	RevertOwnershipToRoleName: *string,
	Roles: *[]*string,
	WithGrantOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database containing the row access policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.rowAccessPolicyName">RowAccessPolicyName</a></code> | <code>*string</code> | The name of the row access policy on which to grant privileges immediately. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | The name of the schema containing the row access policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#id RowAccessPolicyGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.privilege">Privilege</a></code> | <code>*string</code> | The privilege to grant on the row access policy. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>*string</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database containing the row access policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#database_name RowAccessPolicyGrant#database_name}

---

##### `RowAccessPolicyName`<sup>Required</sup> <a name="RowAccessPolicyName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.rowAccessPolicyName"></a>

```go
RowAccessPolicyName *string
```

- *Type:* *string

The name of the row access policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#row_access_policy_name RowAccessPolicyGrant#row_access_policy_name}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The name of the schema containing the row access policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#schema_name RowAccessPolicyGrant#schema_name}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.enableMultipleGrants"></a>

```go
EnableMultipleGrants interface{}
```

- *Type:* interface{}

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#enable_multiple_grants RowAccessPolicyGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#id RowAccessPolicyGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.privilege"></a>

```go
Privilege *string
```

- *Type:* *string

The privilege to grant on the row access policy. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#privilege RowAccessPolicyGrant#privilege}

---

##### `RevertOwnershipToRoleName`<sup>Optional</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.revertOwnershipToRoleName"></a>

```go
RevertOwnershipToRoleName *string
```

- *Type:* *string

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#revert_ownership_to_role_name RowAccessPolicyGrant#revert_ownership_to_role_name}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#roles RowAccessPolicyGrant#roles}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.rowAccessPolicyGrant.RowAccessPolicyGrantConfig.property.withGrantOption"></a>

```go
WithGrantOption interface{}
```

- *Type:* interface{}

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/row_access_policy_grant#with_grant_option RowAccessPolicyGrant#with_grant_option}

---



