# `grantPrivilegesToShare` Submodule <a name="`grantPrivilegesToShare` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToShare <a name="GrantPrivilegesToShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share snowflake_grant_privileges_to_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

grantprivilegestoshare.NewGrantPrivilegesToShare(scope Construct, id *string, config GrantPrivilegesToShareConfig) GrantPrivilegesToShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig">GrantPrivilegesToShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig">GrantPrivilegesToShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema">ResetOnAllTablesInSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase">ResetOnDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnFunction">ResetOnFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema">ResetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable">ResetOnTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag">ResetOnTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView">ResetOnView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts"></a>

```go
func PutTimeouts(value GrantPrivilegesToShareTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId"></a>

```go
func ResetId()
```

##### `ResetOnAllTablesInSchema` <a name="ResetOnAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema"></a>

```go
func ResetOnAllTablesInSchema()
```

##### `ResetOnDatabase` <a name="ResetOnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase"></a>

```go
func ResetOnDatabase()
```

##### `ResetOnFunction` <a name="ResetOnFunction" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnFunction"></a>

```go
func ResetOnFunction()
```

##### `ResetOnSchema` <a name="ResetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema"></a>

```go
func ResetOnSchema()
```

##### `ResetOnTable` <a name="ResetOnTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable"></a>

```go
func ResetOnTable()
```

##### `ResetOnTag` <a name="ResetOnTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag"></a>

```go
func ResetOnTag()
```

##### `ResetOnView` <a name="ResetOnView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView"></a>

```go
func ResetOnView()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

grantprivilegestoshare.GrantPrivilegesToShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

grantprivilegestoshare.GrantPrivilegesToShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

grantprivilegestoshare.GrantPrivilegesToShare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

grantprivilegestoshare.GrantPrivilegesToShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GrantPrivilegesToShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GrantPrivilegesToShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference">GrantPrivilegesToShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput">OnAllTablesInSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput">OnDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunctionInput">OnFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput">OnSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput">OnTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput">OnTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput">OnViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput">ToShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema">OnAllTablesInSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase">OnDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunction">OnFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema">OnSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable">OnTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag">OnTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView">OnView</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare">ToShare</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeouts"></a>

```go
func Timeouts() GrantPrivilegesToShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference">GrantPrivilegesToShareTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnAllTablesInSchemaInput`<sup>Optional</sup> <a name="OnAllTablesInSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput"></a>

```go
func OnAllTablesInSchemaInput() *string
```

- *Type:* *string

---

##### `OnDatabaseInput`<sup>Optional</sup> <a name="OnDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput"></a>

```go
func OnDatabaseInput() *string
```

- *Type:* *string

---

##### `OnFunctionInput`<sup>Optional</sup> <a name="OnFunctionInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunctionInput"></a>

```go
func OnFunctionInput() *string
```

- *Type:* *string

---

##### `OnSchemaInput`<sup>Optional</sup> <a name="OnSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput"></a>

```go
func OnSchemaInput() *string
```

- *Type:* *string

---

##### `OnTableInput`<sup>Optional</sup> <a name="OnTableInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput"></a>

```go
func OnTableInput() *string
```

- *Type:* *string

---

##### `OnTagInput`<sup>Optional</sup> <a name="OnTagInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput"></a>

```go
func OnTagInput() *string
```

- *Type:* *string

---

##### `OnViewInput`<sup>Optional</sup> <a name="OnViewInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput"></a>

```go
func OnViewInput() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ToShareInput`<sup>Optional</sup> <a name="ToShareInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput"></a>

```go
func ToShareInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnAllTablesInSchema`<sup>Required</sup> <a name="OnAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema"></a>

```go
func OnAllTablesInSchema() *string
```

- *Type:* *string

---

##### `OnDatabase`<sup>Required</sup> <a name="OnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase"></a>

```go
func OnDatabase() *string
```

- *Type:* *string

---

##### `OnFunction`<sup>Required</sup> <a name="OnFunction" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunction"></a>

```go
func OnFunction() *string
```

- *Type:* *string

---

##### `OnSchema`<sup>Required</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema"></a>

```go
func OnSchema() *string
```

- *Type:* *string

---

##### `OnTable`<sup>Required</sup> <a name="OnTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable"></a>

```go
func OnTable() *string
```

- *Type:* *string

---

##### `OnTag`<sup>Required</sup> <a name="OnTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag"></a>

```go
func OnTag() *string
```

- *Type:* *string

---

##### `OnView`<sup>Required</sup> <a name="OnView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView"></a>

```go
func OnView() *string
```

- *Type:* *string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `ToShare`<sup>Required</sup> <a name="ToShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare"></a>

```go
func ToShare() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToShareConfig <a name="GrantPrivilegesToShareConfig" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

&grantprivilegestoshare.GrantPrivilegesToShareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Privileges: *[]*string,
	ToShare: *string,
	Id: *string,
	OnAllTablesInSchema: *string,
	OnDatabase: *string,
	OnFunction: *string,
	OnSchema: *string,
	OnTable: *string,
	OnTag: *string,
	OnView: *string,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges">Privileges</a></code> | <code>*[]*string</code> | The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare">ToShare</a></code> | <code>*string</code> | The fully qualified name of the share on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema">OnAllTablesInSchema</a></code> | <code>*string</code> | The fully qualified identifier for the schema for which the specified privilege will be granted for all tables. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase">OnDatabase</a></code> | <code>*string</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onFunction">OnFunction</a></code> | <code>*string</code> | The fully qualified name of the function on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema">OnSchema</a></code> | <code>*string</code> | The fully qualified name of the schema on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable">OnTable</a></code> | <code>*string</code> | The fully qualified name of the table on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag">OnTag</a></code> | <code>*string</code> | The fully qualified name of the tag on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView">OnView</a></code> | <code>*string</code> | The fully qualified name of the view on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#privileges GrantPrivilegesToShare#privileges}

---

##### `ToShare`<sup>Required</sup> <a name="ToShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare"></a>

```go
ToShare *string
```

- *Type:* *string

The fully qualified name of the share on which privileges will be granted.

For more information about this resource, see [docs](./share).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#to_share GrantPrivilegesToShare#to_share}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAllTablesInSchema`<sup>Optional</sup> <a name="OnAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema"></a>

```go
OnAllTablesInSchema *string
```

- *Type:* *string

The fully qualified identifier for the schema for which the specified privilege will be granted for all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_all_tables_in_schema GrantPrivilegesToShare#on_all_tables_in_schema}

---

##### `OnDatabase`<sup>Optional</sup> <a name="OnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase"></a>

```go
OnDatabase *string
```

- *Type:* *string

The fully qualified name of the database on which privileges will be granted.

For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_database GrantPrivilegesToShare#on_database}

---

##### `OnFunction`<sup>Optional</sup> <a name="OnFunction" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onFunction"></a>

```go
OnFunction *string
```

- *Type:* *string

The fully qualified name of the function on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_function GrantPrivilegesToShare#on_function}

---

##### `OnSchema`<sup>Optional</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema"></a>

```go
OnSchema *string
```

- *Type:* *string

The fully qualified name of the schema on which privileges will be granted.

For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_schema GrantPrivilegesToShare#on_schema}

---

##### `OnTable`<sup>Optional</sup> <a name="OnTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable"></a>

```go
OnTable *string
```

- *Type:* *string

The fully qualified name of the table on which privileges will be granted.

For more information about this resource, see [docs](./table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_table GrantPrivilegesToShare#on_table}

---

##### `OnTag`<sup>Optional</sup> <a name="OnTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag"></a>

```go
OnTag *string
```

- *Type:* *string

The fully qualified name of the tag on which privileges will be granted.

For more information about this resource, see [docs](./tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_tag GrantPrivilegesToShare#on_tag}

---

##### `OnView`<sup>Optional</sup> <a name="OnView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView"></a>

```go
OnView *string
```

- *Type:* *string

The fully qualified name of the view on which privileges will be granted.

For more information about this resource, see [docs](./view).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#on_view GrantPrivilegesToShare#on_view}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.timeouts"></a>

```go
Timeouts GrantPrivilegesToShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#timeouts GrantPrivilegesToShare#timeouts}

---

### GrantPrivilegesToShareTimeouts <a name="GrantPrivilegesToShareTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

&grantprivilegestoshare.GrantPrivilegesToShareTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#create GrantPrivilegesToShare#create}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#delete GrantPrivilegesToShare#delete}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#read GrantPrivilegesToShare#read}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#update GrantPrivilegesToShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#create GrantPrivilegesToShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#delete GrantPrivilegesToShare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#read GrantPrivilegesToShare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/grant_privileges_to_share#update GrantPrivilegesToShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToShareTimeoutsOutputReference <a name="GrantPrivilegesToShareTimeoutsOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v14/grantprivilegestoshare"

grantprivilegestoshare.NewGrantPrivilegesToShareTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantPrivilegesToShareTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



