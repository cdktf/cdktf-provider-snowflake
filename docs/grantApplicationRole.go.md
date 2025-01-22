# `grantApplicationRole` Submodule <a name="`grantApplicationRole` Submodule" id="@cdktf/provider-snowflake.grantApplicationRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantApplicationRole <a name="GrantApplicationRole" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role snowflake_grant_application_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/grantapplicationrole"

grantapplicationrole.NewGrantApplicationRole(scope Construct, id *string, config GrantApplicationRoleConfig) GrantApplicationRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig">GrantApplicationRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig">GrantApplicationRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetParentAccountRoleName">ResetParentAccountRoleName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplicationName` <a name="ResetApplicationName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetApplicationName"></a>

```go
func ResetApplicationName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetId"></a>

```go
func ResetId()
```

##### `ResetParentAccountRoleName` <a name="ResetParentAccountRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetParentAccountRoleName"></a>

```go
func ResetParentAccountRoleName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantApplicationRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/grantapplicationrole"

grantapplicationrole.GrantApplicationRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/grantapplicationrole"

grantapplicationrole.GrantApplicationRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/grantapplicationrole"

grantapplicationrole.GrantApplicationRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/grantapplicationrole"

grantapplicationrole.GrantApplicationRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GrantApplicationRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GrantApplicationRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GrantApplicationRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GrantApplicationRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleNameInput">ApplicationRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleNameInput">ParentAccountRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleName">ApplicationRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleName">ParentAccountRoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `ApplicationRoleNameInput`<sup>Optional</sup> <a name="ApplicationRoleNameInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleNameInput"></a>

```go
func ApplicationRoleNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentAccountRoleNameInput`<sup>Optional</sup> <a name="ParentAccountRoleNameInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleNameInput"></a>

```go
func ParentAccountRoleNameInput() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ApplicationRoleName`<sup>Required</sup> <a name="ApplicationRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleName"></a>

```go
func ApplicationRoleName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParentAccountRoleName`<sup>Required</sup> <a name="ParentAccountRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleName"></a>

```go
func ParentAccountRoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantApplicationRoleConfig <a name="GrantApplicationRoleConfig" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/grantapplicationrole"

&grantapplicationrole.GrantApplicationRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationRoleName: *string,
	ApplicationName: *string,
	Id: *string,
	ParentAccountRoleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationRoleName">ApplicationRoleName</a></code> | <code>*string</code> | Specifies the identifier for the application role to grant. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationName">ApplicationName</a></code> | <code>*string</code> | The fully qualified name of the application on which application role will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role#id GrantApplicationRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.parentAccountRoleName">ParentAccountRoleName</a></code> | <code>*string</code> | The fully qualified name of the account role on which application role will be granted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationRoleName`<sup>Required</sup> <a name="ApplicationRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationRoleName"></a>

```go
ApplicationRoleName *string
```

- *Type:* *string

Specifies the identifier for the application role to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role#application_role_name GrantApplicationRole#application_role_name}

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

The fully qualified name of the application on which application role will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role#application_name GrantApplicationRole#application_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role#id GrantApplicationRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentAccountRoleName`<sup>Optional</sup> <a name="ParentAccountRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.parentAccountRoleName"></a>

```go
ParentAccountRoleName *string
```

- *Type:* *string

The fully qualified name of the account role on which application role will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/grant_application_role#parent_account_role_name GrantApplicationRole#parent_account_role_name}

---



