# `grantPrivilegesToRole` Submodule <a name="`grantPrivilegesToRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToRole <a name="GrantPrivilegesToRole" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role snowflake_grant_privileges_to_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.NewGrantPrivilegesToRole(scope Construct, id *string, config GrantPrivilegesToRoleConfig) GrantPrivilegesToRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig">GrantPrivilegesToRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig">GrantPrivilegesToRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject">PutOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema">PutOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject">PutOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetAllPrivileges">ResetAllPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccount">ResetOnAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccountObject">ResetOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchema">ResetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchemaObject">ResetOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetPrivileges">ResetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnAccountObject` <a name="PutOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject"></a>

```go
func PutOnAccountObject(value GrantPrivilegesToRoleOnAccountObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---

##### `PutOnSchema` <a name="PutOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema"></a>

```go
func PutOnSchema(value GrantPrivilegesToRoleOnSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---

##### `PutOnSchemaObject` <a name="PutOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject"></a>

```go
func PutOnSchemaObject(value GrantPrivilegesToRoleOnSchemaObject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---

##### `ResetAllPrivileges` <a name="ResetAllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetAllPrivileges"></a>

```go
func ResetAllPrivileges()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetId"></a>

```go
func ResetId()
```

##### `ResetOnAccount` <a name="ResetOnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccount"></a>

```go
func ResetOnAccount()
```

##### `ResetOnAccountObject` <a name="ResetOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccountObject"></a>

```go
func ResetOnAccountObject()
```

##### `ResetOnSchema` <a name="ResetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchema"></a>

```go
func ResetOnSchema()
```

##### `ResetOnSchemaObject` <a name="ResetOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchemaObject"></a>

```go
func ResetOnSchemaObject()
```

##### `ResetPrivileges` <a name="ResetPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetPrivileges"></a>

```go
func ResetPrivileges()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetWithGrantOption"></a>

```go
func ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.GrantPrivilegesToRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.GrantPrivilegesToRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.GrantPrivilegesToRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.GrantPrivilegesToRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GrantPrivilegesToRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GrantPrivilegesToRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObject">OnAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference">GrantPrivilegesToRoleOnAccountObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchema">OnSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference">GrantPrivilegesToRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObject">OnSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference">GrantPrivilegesToRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivilegesInput">AllPrivilegesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountInput">OnAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObjectInput">OnAccountObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaInput">OnSchemaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObjectInput">OnSchemaObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivileges">AllPrivileges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccount">OnAccount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnAccountObject`<sup>Required</sup> <a name="OnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObject"></a>

```go
func OnAccountObject() GrantPrivilegesToRoleOnAccountObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference">GrantPrivilegesToRoleOnAccountObjectOutputReference</a>

---

##### `OnSchema`<sup>Required</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchema"></a>

```go
func OnSchema() GrantPrivilegesToRoleOnSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference">GrantPrivilegesToRoleOnSchemaOutputReference</a>

---

##### `OnSchemaObject`<sup>Required</sup> <a name="OnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObject"></a>

```go
func OnSchemaObject() GrantPrivilegesToRoleOnSchemaObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference">GrantPrivilegesToRoleOnSchemaObjectOutputReference</a>

---

##### `AllPrivilegesInput`<sup>Optional</sup> <a name="AllPrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivilegesInput"></a>

```go
func AllPrivilegesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnAccountInput`<sup>Optional</sup> <a name="OnAccountInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountInput"></a>

```go
func OnAccountInput() interface{}
```

- *Type:* interface{}

---

##### `OnAccountObjectInput`<sup>Optional</sup> <a name="OnAccountObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObjectInput"></a>

```go
func OnAccountObjectInput() GrantPrivilegesToRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---

##### `OnSchemaInput`<sup>Optional</sup> <a name="OnSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaInput"></a>

```go
func OnSchemaInput() GrantPrivilegesToRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---

##### `OnSchemaObjectInput`<sup>Optional</sup> <a name="OnSchemaObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObjectInput"></a>

```go
func OnSchemaObjectInput() GrantPrivilegesToRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOptionInput"></a>

```go
func WithGrantOptionInput() interface{}
```

- *Type:* interface{}

---

##### `AllPrivileges`<sup>Required</sup> <a name="AllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivileges"></a>

```go
func AllPrivileges() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnAccount`<sup>Required</sup> <a name="OnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccount"></a>

```go
func OnAccount() interface{}
```

- *Type:* interface{}

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOption"></a>

```go
func WithGrantOption() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToRoleConfig <a name="GrantPrivilegesToRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

&grantprivilegestorole.GrantPrivilegesToRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RoleName: *string,
	AllPrivileges: interface{},
	Id: *string,
	OnAccount: interface{},
	OnAccountObject: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject,
	OnSchema: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema,
	OnSchemaObject: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject,
	Privileges: *[]*string,
	WithGrantOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | The fully qualified name of the role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.allPrivileges">AllPrivileges</a></code> | <code>interface{}</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccount">OnAccount</a></code> | <code>interface{}</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccountObject">OnAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchema">OnSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchemaObject">OnSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.privileges">Privileges</a></code> | <code>*[]*string</code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

The fully qualified name of the role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#role_name GrantPrivilegesToRole#role_name}

---

##### `AllPrivileges`<sup>Optional</sup> <a name="AllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.allPrivileges"></a>

```go
AllPrivileges interface{}
```

- *Type:* interface{}

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all_privileges GrantPrivilegesToRole#all_privileges}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAccount`<sup>Optional</sup> <a name="OnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccount"></a>

```go
OnAccount interface{}
```

- *Type:* interface{}

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_account GrantPrivilegesToRole#on_account}

---

##### `OnAccountObject`<sup>Optional</sup> <a name="OnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccountObject"></a>

```go
OnAccountObject GrantPrivilegesToRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_account_object GrantPrivilegesToRole#on_account_object}

---

##### `OnSchema`<sup>Optional</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchema"></a>

```go
OnSchema GrantPrivilegesToRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_schema GrantPrivilegesToRole#on_schema}

---

##### `OnSchemaObject`<sup>Optional</sup> <a name="OnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchemaObject"></a>

```go
OnSchemaObject GrantPrivilegesToRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_schema_object GrantPrivilegesToRole#on_schema_object}

---

##### `Privileges`<sup>Optional</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#privileges GrantPrivilegesToRole#privileges}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.withGrantOption"></a>

```go
WithGrantOption interface{}
```

- *Type:* interface{}

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#with_grant_option GrantPrivilegesToRole#with_grant_option}

---

### GrantPrivilegesToRoleOnAccountObject <a name="GrantPrivilegesToRoleOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

&grantprivilegestorole.GrantPrivilegesToRoleOnAccountObject {
	ObjectName: *string,
	ObjectType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectName">ObjectName</a></code> | <code>*string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectType">ObjectType</a></code> | <code>*string</code> | The object type of the account object on which privileges will be granted. |

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectName"></a>

```go
ObjectName *string
```

- *Type:* *string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

### GrantPrivilegesToRoleOnSchema <a name="GrantPrivilegesToRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

&grantprivilegestorole.GrantPrivilegesToRoleOnSchema {
	AllSchemasInDatabase: *string,
	FutureSchemasInDatabase: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.allSchemasInDatabase">AllSchemasInDatabase</a></code> | <code>*string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.futureSchemasInDatabase">FutureSchemasInDatabase</a></code> | <code>*string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.schemaName">SchemaName</a></code> | <code>*string</code> | The fully qualified name of the schema. |

---

##### `AllSchemasInDatabase`<sup>Optional</sup> <a name="AllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.allSchemasInDatabase"></a>

```go
AllSchemasInDatabase *string
```

- *Type:* *string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all_schemas_in_database GrantPrivilegesToRole#all_schemas_in_database}

---

##### `FutureSchemasInDatabase`<sup>Optional</sup> <a name="FutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.futureSchemasInDatabase"></a>

```go
FutureSchemasInDatabase *string
```

- *Type:* *string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#future_schemas_in_database GrantPrivilegesToRole#future_schemas_in_database}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#schema_name GrantPrivilegesToRole#schema_name}

---

### GrantPrivilegesToRoleOnSchemaObject <a name="GrantPrivilegesToRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

&grantprivilegestorole.GrantPrivilegesToRoleOnSchemaObject {
	All: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll,
	Future: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture,
	ObjectName: *string,
	ObjectType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectName">ObjectName</a></code> | <code>*string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectType">ObjectType</a></code> | <code>*string</code> | The object type of the schema object on which privileges will be granted. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.all"></a>

```go
All GrantPrivilegesToRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all GrantPrivilegesToRole#all}

---

##### `Future`<sup>Optional</sup> <a name="Future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.future"></a>

```go
Future GrantPrivilegesToRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#future GrantPrivilegesToRole#future}

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectName"></a>

```go
ObjectName *string
```

- *Type:* *string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

The object type of the schema object on which privileges will be granted.

Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

### GrantPrivilegesToRoleOnSchemaObjectAll <a name="GrantPrivilegesToRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

&grantprivilegestorole.GrantPrivilegesToRoleOnSchemaObjectAll {
	ObjectTypePlural: *string,
	InDatabase: *string,
	InSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.objectTypePlural">ObjectTypePlural</a></code> | <code>*string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inDatabase">InDatabase</a></code> | <code>*string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inSchema">InSchema</a></code> | <code>*string</code> | The fully qualified name of the schema. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```go
ObjectTypePlural *string
```

- *Type:* *string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inDatabase"></a>

```go
InDatabase *string
```

- *Type:* *string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inSchema"></a>

```go
InSchema *string
```

- *Type:* *string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

### GrantPrivilegesToRoleOnSchemaObjectFuture <a name="GrantPrivilegesToRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

&grantprivilegestorole.GrantPrivilegesToRoleOnSchemaObjectFuture {
	ObjectTypePlural: *string,
	InDatabase: *string,
	InSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.objectTypePlural">ObjectTypePlural</a></code> | <code>*string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inDatabase">InDatabase</a></code> | <code>*string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inSchema">InSchema</a></code> | <code>*string</code> | The fully qualified name of the schema. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```go
ObjectTypePlural *string
```

- *Type:* *string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inDatabase"></a>

```go
InDatabase *string
```

- *Type:* *string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inSchema"></a>

```go
InSchema *string
```

- *Type:* *string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToRoleOnAccountObjectOutputReference <a name="GrantPrivilegesToRoleOnAccountObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.NewGrantPrivilegesToRoleOnAccountObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantPrivilegesToRoleOnAccountObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectNameInput"></a>

```go
func ObjectNameInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() GrantPrivilegesToRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---


### GrantPrivilegesToRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.NewGrantPrivilegesToRoleOnSchemaObjectAllOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantPrivilegesToRoleOnSchemaObjectAllOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```go
func ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```go
func ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabase">InDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchema">InSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```go
func InDatabaseInput() *string
```

- *Type:* *string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```go
func InSchemaInput() *string
```

- *Type:* *string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```go
func ObjectTypePluralInput() *string
```

- *Type:* *string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```go
func InDatabase() *string
```

- *Type:* *string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```go
func InSchema() *string
```

- *Type:* *string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```go
func ObjectTypePlural() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```go
func InternalValue() GrantPrivilegesToRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.NewGrantPrivilegesToRoleOnSchemaObjectFutureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```go
func ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```go
func ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabase">InDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchema">InSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```go
func InDatabaseInput() *string
```

- *Type:* *string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```go
func InSchemaInput() *string
```

- *Type:* *string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```go
func ObjectTypePluralInput() *string
```

- *Type:* *string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```go
func InDatabase() *string
```

- *Type:* *string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```go
func InSchema() *string
```

- *Type:* *string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```go
func ObjectTypePlural() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```go
func InternalValue() GrantPrivilegesToRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.NewGrantPrivilegesToRoleOnSchemaObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantPrivilegesToRoleOnSchemaObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll">PutAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture">PutFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetFuture">ResetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectType">ResetObjectType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAll` <a name="PutAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll"></a>

```go
func PutAll(value GrantPrivilegesToRoleOnSchemaObjectAll)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---

##### `PutFuture` <a name="PutFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture"></a>

```go
func PutFuture(value GrantPrivilegesToRoleOnSchemaObjectFuture)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetFuture` <a name="ResetFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetFuture"></a>

```go
func ResetFuture()
```

##### `ResetObjectName` <a name="ResetObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```go
func ResetObjectName()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```go
func ResetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.allInput">AllInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.futureInput">FutureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.all"></a>

```go
func All() GrantPrivilegesToRoleOnSchemaObjectAllOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToRoleOnSchemaObjectAllOutputReference</a>

---

##### `Future`<sup>Required</sup> <a name="Future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.future"></a>

```go
func Future() GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.allInput"></a>

```go
func AllInput() GrantPrivilegesToRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---

##### `FutureInput`<sup>Optional</sup> <a name="FutureInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```go
func FutureInput() GrantPrivilegesToRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```go
func ObjectNameInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() GrantPrivilegesToRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---


### GrantPrivilegesToRoleOnSchemaOutputReference <a name="GrantPrivilegesToRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/grantprivilegestorole"

grantprivilegestorole.NewGrantPrivilegesToRoleOnSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantPrivilegesToRoleOnSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetAllSchemasInDatabase">ResetAllSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">ResetFutureSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllSchemasInDatabase` <a name="ResetAllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```go
func ResetAllSchemasInDatabase()
```

##### `ResetFutureSchemasInDatabase` <a name="ResetFutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```go
func ResetFutureSchemasInDatabase()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">AllSchemasInDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">FutureSchemasInDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabase">AllSchemasInDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabase">FutureSchemasInDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllSchemasInDatabaseInput`<sup>Optional</sup> <a name="AllSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```go
func AllSchemasInDatabaseInput() *string
```

- *Type:* *string

---

##### `FutureSchemasInDatabaseInput`<sup>Optional</sup> <a name="FutureSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```go
func FutureSchemasInDatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `AllSchemasInDatabase`<sup>Required</sup> <a name="AllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```go
func AllSchemasInDatabase() *string
```

- *Type:* *string

---

##### `FutureSchemasInDatabase`<sup>Required</sup> <a name="FutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```go
func FutureSchemasInDatabase() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() GrantPrivilegesToRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---



