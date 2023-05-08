# `snowflake_role_ownership_grant`

Refer to the Terraform Registory for docs: [`snowflake_role_ownership_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant).

# `roleOwnershipGrant` Submodule <a name="`roleOwnershipGrant` Submodule" id="@cdktf/provider-snowflake.roleOwnershipGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleOwnershipGrant <a name="RoleOwnershipGrant" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant snowflake_role_ownership_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/roleownershipgrant"

roleownershipgrant.NewRoleOwnershipGrant(scope Construct, id *string, config RoleOwnershipGrantConfig) RoleOwnershipGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig">RoleOwnershipGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig">RoleOwnershipGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetCurrentGrants">ResetCurrentGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetRevertOwnershipToRoleName">ResetRevertOwnershipToRoleName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCurrentGrants` <a name="ResetCurrentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetCurrentGrants"></a>

```go
func ResetCurrentGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetRevertOwnershipToRoleName` <a name="ResetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetRevertOwnershipToRoleName"></a>

```go
func ResetRevertOwnershipToRoleName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/roleownershipgrant"

roleownershipgrant.RoleOwnershipGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/roleownershipgrant"

roleownershipgrant.RoleOwnershipGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/roleownershipgrant"

roleownershipgrant.RoleOwnershipGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrantsInput">CurrentGrantsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleNameInput">OnRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleNameInput">RevertOwnershipToRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleNameInput">ToRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrants">CurrentGrants</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleName">OnRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleName">ToRoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentGrantsInput`<sup>Optional</sup> <a name="CurrentGrantsInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrantsInput"></a>

```go
func CurrentGrantsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnRoleNameInput`<sup>Optional</sup> <a name="OnRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleNameInput"></a>

```go
func OnRoleNameInput() *string
```

- *Type:* *string

---

##### `RevertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="RevertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleNameInput"></a>

```go
func RevertOwnershipToRoleNameInput() *string
```

- *Type:* *string

---

##### `ToRoleNameInput`<sup>Optional</sup> <a name="ToRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleNameInput"></a>

```go
func ToRoleNameInput() *string
```

- *Type:* *string

---

##### `CurrentGrants`<sup>Required</sup> <a name="CurrentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrants"></a>

```go
func CurrentGrants() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnRoleName`<sup>Required</sup> <a name="OnRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleName"></a>

```go
func OnRoleName() *string
```

- *Type:* *string

---

##### `RevertOwnershipToRoleName`<sup>Required</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleName"></a>

```go
func RevertOwnershipToRoleName() *string
```

- *Type:* *string

---

##### `ToRoleName`<sup>Required</sup> <a name="ToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleName"></a>

```go
func ToRoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleOwnershipGrantConfig <a name="RoleOwnershipGrantConfig" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/roleownershipgrant"

&roleownershipgrant.RoleOwnershipGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OnRoleName: *string,
	ToRoleName: *string,
	CurrentGrants: *string,
	Id: *string,
	RevertOwnershipToRoleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.onRoleName">OnRoleName</a></code> | <code>*string</code> | The name of the role ownership is granted on. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.toRoleName">ToRoleName</a></code> | <code>*string</code> | The name of the role to grant ownership. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.currentGrants">CurrentGrants</a></code> | <code>*string</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>*string</code> | The name of the role to revert ownership to on destroy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnRoleName`<sup>Required</sup> <a name="OnRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.onRoleName"></a>

```go
OnRoleName *string
```

- *Type:* *string

The name of the role ownership is granted on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant#on_role_name RoleOwnershipGrant#on_role_name}

---

##### `ToRoleName`<sup>Required</sup> <a name="ToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.toRoleName"></a>

```go
ToRoleName *string
```

- *Type:* *string

The name of the role to grant ownership.

Please ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant#to_role_name RoleOwnershipGrant#to_role_name}

---

##### `CurrentGrants`<sup>Optional</sup> <a name="CurrentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.currentGrants"></a>

```go
CurrentGrants *string
```

- *Type:* *string

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant#current_grants RoleOwnershipGrant#current_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RevertOwnershipToRoleName`<sup>Optional</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.revertOwnershipToRoleName"></a>

```go
RevertOwnershipToRoleName *string
```

- *Type:* *string

The name of the role to revert ownership to on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/role_ownership_grant#revert_ownership_to_role_name RoleOwnershipGrant#revert_ownership_to_role_name}

---



