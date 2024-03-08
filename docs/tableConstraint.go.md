# `tableConstraint` Submodule <a name="`tableConstraint` Submodule" id="@cdktf/provider-snowflake.tableConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableConstraint <a name="TableConstraint" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint snowflake_table_constraint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.NewTableConstraint(scope Construct, id *string, config TableConstraintConfig) TableConstraint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig">TableConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig">TableConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties">PutForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable">ResetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnforced">ResetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties">ResetForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetInitially">ResetInitially</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetRely">ResetRely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutForeignKeyProperties` <a name="PutForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties"></a>

```go
func PutForeignKeyProperties(value TableConstraintForeignKeyProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDeferrable` <a name="ResetDeferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable"></a>

```go
func ResetDeferrable()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnforced"></a>

```go
func ResetEnforced()
```

##### `ResetForeignKeyProperties` <a name="ResetForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties"></a>

```go
func ResetForeignKeyProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetId"></a>

```go
func ResetId()
```

##### `ResetInitially` <a name="ResetInitially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetInitially"></a>

```go
func ResetInitially()
```

##### `ResetRely` <a name="ResetRely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetRely"></a>

```go
func ResetRely()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetValidate"></a>

```go
func ResetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.TableConstraint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.TableConstraint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.TableConstraint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.TableConstraint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TableConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TableConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TableConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties">ForeignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput">DeferrableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput">EnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput">ForeignKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput">InitiallyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.relyInput">RelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validateInput">ValidateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrable">Deferrable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforced">Enforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initially">Initially</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.rely">Rely</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validate">Validate</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ForeignKeyProperties`<sup>Required</sup> <a name="ForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties"></a>

```go
func ForeignKeyProperties() TableConstraintForeignKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DeferrableInput`<sup>Optional</sup> <a name="DeferrableInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput"></a>

```go
func DeferrableInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput"></a>

```go
func EnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `ForeignKeyPropertiesInput`<sup>Optional</sup> <a name="ForeignKeyPropertiesInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput"></a>

```go
func ForeignKeyPropertiesInput() TableConstraintForeignKeyProperties
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitiallyInput`<sup>Optional</sup> <a name="InitiallyInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput"></a>

```go
func InitiallyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelyInput`<sup>Optional</sup> <a name="RelyInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.relyInput"></a>

```go
func RelyInput() interface{}
```

- *Type:* interface{}

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validateInput"></a>

```go
func ValidateInput() interface{}
```

- *Type:* interface{}

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Deferrable`<sup>Required</sup> <a name="Deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrable"></a>

```go
func Deferrable() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforced"></a>

```go
func Enforced() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Initially`<sup>Required</sup> <a name="Initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initially"></a>

```go
func Initially() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rely`<sup>Required</sup> <a name="Rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.rely"></a>

```go
func Rely() interface{}
```

- *Type:* interface{}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validate"></a>

```go
func Validate() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TableConstraintConfig <a name="TableConstraintConfig" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

&tableconstraint.TableConstraintConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Columns: *[]*string,
	Name: *string,
	TableId: *string,
	Type: *string,
	Comment: *string,
	Deferrable: interface{},
	Enable: interface{},
	Enforced: interface{},
	ForeignKeyProperties: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.tableConstraint.TableConstraintForeignKeyProperties,
	Id: *string,
	Initially: *string,
	Rely: interface{},
	Validate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns">Columns</a></code> | <code>*[]*string</code> | Columns to use in constraint key. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.name">Name</a></code> | <code>*string</code> | Name of constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId">TableId</a></code> | <code>*string</code> | Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id). |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.type">Type</a></code> | <code>*string</code> | Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment">Comment</a></code> | <code>*string</code> | Comment for the table constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable">Deferrable</a></code> | <code>interface{}</code> | Whether the constraint is deferrable. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced">Enforced</a></code> | <code>interface{}</code> | Whether the constraint is enforced. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties">ForeignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | foreign_key_properties block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#id TableConstraint#id}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially">Initially</a></code> | <code>*string</code> | Whether the constraint is initially deferred or immediate. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely">Rely</a></code> | <code>interface{}</code> | Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate">Validate</a></code> | <code>interface{}</code> | Specifies whether to validate existing data on the table when a constraint is created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Columns to use in constraint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#name TableConstraint#name}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#type TableConstraint#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Comment for the table constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#comment TableConstraint#comment}

---

##### `Deferrable`<sup>Optional</sup> <a name="Deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable"></a>

```go
Deferrable interface{}
```

- *Type:* interface{}

Whether the constraint is deferrable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#deferrable TableConstraint#deferrable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#enable TableConstraint#enable}

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced"></a>

```go
Enforced interface{}
```

- *Type:* interface{}

Whether the constraint is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#enforced TableConstraint#enforced}

---

##### `ForeignKeyProperties`<sup>Optional</sup> <a name="ForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties"></a>

```go
ForeignKeyProperties TableConstraintForeignKeyProperties
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

foreign_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#foreign_key_properties TableConstraint#foreign_key_properties}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#id TableConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Initially`<sup>Optional</sup> <a name="Initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially"></a>

```go
Initially *string
```

- *Type:* *string

Whether the constraint is initially deferred or immediate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#initially TableConstraint#initially}

---

##### `Rely`<sup>Optional</sup> <a name="Rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely"></a>

```go
Rely interface{}
```

- *Type:* interface{}

Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#rely TableConstraint#rely}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate"></a>

```go
Validate interface{}
```

- *Type:* interface{}

Specifies whether to validate existing data on the table when a constraint is created.

Only used in conjunction with the ENABLE property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#validate TableConstraint#validate}

---

### TableConstraintForeignKeyProperties <a name="TableConstraintForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

&tableconstraint.TableConstraintForeignKeyProperties {
	Match: *string,
	OnDelete: *string,
	OnUpdate: *string,
	References: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match">Match</a></code> | <code>*string</code> | The match type for the foreign key. Not applicable for primary/unique keys. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete">OnDelete</a></code> | <code>*string</code> | Specifies the action performed when the primary/unique key for the foreign key is deleted. Not applicable for primary/unique keys. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate">OnUpdate</a></code> | <code>*string</code> | Specifies the action performed when the primary/unique key for the foreign key is updated. Not applicable for primary/unique keys. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references">References</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | references block. |

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match"></a>

```go
Match *string
```

- *Type:* *string

The match type for the foreign key. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#match TableConstraint#match}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete"></a>

```go
OnDelete *string
```

- *Type:* *string

Specifies the action performed when the primary/unique key for the foreign key is deleted. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#on_delete TableConstraint#on_delete}

---

##### `OnUpdate`<sup>Optional</sup> <a name="OnUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate"></a>

```go
OnUpdate *string
```

- *Type:* *string

Specifies the action performed when the primary/unique key for the foreign key is updated. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#on_update TableConstraint#on_update}

---

##### `References`<sup>Optional</sup> <a name="References" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references"></a>

```go
References TableConstraintForeignKeyPropertiesReferences
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#references TableConstraint#references}

---

### TableConstraintForeignKeyPropertiesReferences <a name="TableConstraintForeignKeyPropertiesReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

&tableconstraint.TableConstraintForeignKeyPropertiesReferences {
	Columns: *[]*string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns">Columns</a></code> | <code>*[]*string</code> | Columns to use in foreign key reference. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId">TableId</a></code> | <code>*string</code> | Name of constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Columns to use in foreign key reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

## Classes <a name="Classes" id="Classes"></a>

### TableConstraintForeignKeyPropertiesOutputReference <a name="TableConstraintForeignKeyPropertiesOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.NewTableConstraintForeignKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TableConstraintForeignKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences">PutReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate">ResetOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetReferences">ResetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReferences` <a name="PutReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences"></a>

```go
func PutReferences(value TableConstraintForeignKeyPropertiesReferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete"></a>

```go
func ResetOnDelete()
```

##### `ResetOnUpdate` <a name="ResetOnUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate"></a>

```go
func ResetOnUpdate()
```

##### `ResetReferences` <a name="ResetReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetReferences"></a>

```go
func ResetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references">References</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput">OnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput">OnUpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput">ReferencesInput</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete">OnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate">OnUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references"></a>

```go
func References() TableConstraintForeignKeyPropertiesReferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput"></a>

```go
func OnDeleteInput() *string
```

- *Type:* *string

---

##### `OnUpdateInput`<sup>Optional</sup> <a name="OnUpdateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput"></a>

```go
func OnUpdateInput() *string
```

- *Type:* *string

---

##### `ReferencesInput`<sup>Optional</sup> <a name="ReferencesInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput"></a>

```go
func ReferencesInput() TableConstraintForeignKeyPropertiesReferences
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete"></a>

```go
func OnDelete() *string
```

- *Type:* *string

---

##### `OnUpdate`<sup>Required</sup> <a name="OnUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate"></a>

```go
func OnUpdate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() TableConstraintForeignKeyProperties
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---


### TableConstraintForeignKeyPropertiesReferencesOutputReference <a name="TableConstraintForeignKeyPropertiesReferencesOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/tableconstraint"

tableconstraint.NewTableConstraintForeignKeyPropertiesReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TableConstraintForeignKeyPropertiesReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() TableConstraintForeignKeyPropertiesReferences
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---



