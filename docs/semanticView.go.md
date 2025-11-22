# `semanticView` Submodule <a name="`semanticView` Submodule" id="@cdktf/provider-snowflake.semanticView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SemanticView <a name="SemanticView" id="@cdktf/provider-snowflake.semanticView.SemanticView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view snowflake_semantic_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticView(scope Construct, id *string, config SemanticViewConfig) SemanticView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig">SemanticViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig">SemanticViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putFacts">PutFacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships">PutRelationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTables">PutTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts">ResetFacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships">ResetRelationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFacts` <a name="PutFacts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts"></a>

```go
func PutFacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics"></a>

```go
func PutMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRelationships` <a name="PutRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships"></a>

```go
func PutRelationships(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTables` <a name="PutTables" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables"></a>

```go
func PutTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts"></a>

```go
func PutTimeouts(value SemanticViewTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetFacts` <a name="ResetFacts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts"></a>

```go
func ResetFacts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetId"></a>

```go
func ResetId()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics"></a>

```go
func ResetMetrics()
```

##### `ResetRelationships` <a name="ResetRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships"></a>

```go
func ResetRelationships()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.SemanticView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.SemanticView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.SemanticView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.SemanticView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SemanticView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SemanticView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SemanticView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.facts">Facts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships">Relationships</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tables">Tables</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput">FactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput">MetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput">RelationshipsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput">TablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions"></a>

```go
func Dimensions() SemanticViewDimensionsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a>

---

##### `Facts`<sup>Required</sup> <a name="Facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.facts"></a>

```go
func Facts() SemanticViewFactsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics"></a>

```go
func Metrics() SemanticViewMetricsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a>

---

##### `Relationships`<sup>Required</sup> <a name="Relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships"></a>

```go
func Relationships() SemanticViewRelationshipsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput"></a>

```go
func ShowOutput() SemanticViewShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a>

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tables"></a>

```go
func Tables() SemanticViewTablesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts"></a>

```go
func Timeouts() SemanticViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `FactsInput`<sup>Optional</sup> <a name="FactsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput"></a>

```go
func FactsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput"></a>

```go
func MetricsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelationshipsInput`<sup>Optional</sup> <a name="RelationshipsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput"></a>

```go
func RelationshipsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput"></a>

```go
func TablesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SemanticViewConfig <a name="SemanticViewConfig" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Name: *string,
	Schema: *string,
	Tables: interface{},
	Comment: *string,
	Dimensions: interface{},
	Facts: interface{},
	Id: *string,
	Metrics: interface{},
	Relationships: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.semanticView.SemanticViewTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the semantic view; |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables">Tables</a></code> | <code>interface{}</code> | tables block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | dimensions block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts">Facts</a></code> | <code>interface{}</code> | facts block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics">Metrics</a></code> | <code>interface{}</code> | metrics block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships">Relationships</a></code> | <code>interface{}</code> | relationships block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the semantic view;

must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables"></a>

```go
Tables interface{}
```

- *Type:* interface{}

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the semantic view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}

---

##### `Facts`<sup>Optional</sup> <a name="Facts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts"></a>

```go
Facts interface{}
```

- *Type:* interface{}

facts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics"></a>

```go
Metrics interface{}
```

- *Type:* interface{}

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}

---

##### `Relationships`<sup>Optional</sup> <a name="Relationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships"></a>

```go
Relationships interface{}
```

- *Type:* interface{}

relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts"></a>

```go
Timeouts SemanticViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}

---

### SemanticViewDimensions <a name="SemanticViewDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewDimensions {
	QualifiedExpressionName: *string,
	SqlExpression: *string,
	Comment: *string,
	Synonym: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression used to compute the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym">Synonym</a></code> | <code>*[]*string</code> | List of synonyms for the dimension. |

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName"></a>

```go
QualifiedExpressionName *string
```

- *Type:* *string

Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression used to compute the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `Synonym`<sup>Optional</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym"></a>

```go
Synonym *[]*string
```

- *Type:* *[]*string

List of synonyms for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewFacts <a name="SemanticViewFacts" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewFacts {
	QualifiedExpressionName: *string,
	SqlExpression: *string,
	Comment: *string,
	Synonym: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression used to compute the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym">Synonym</a></code> | <code>*[]*string</code> | List of synonyms for the fact. |

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName"></a>

```go
QualifiedExpressionName *string
```

- *Type:* *string

Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression used to compute the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `Synonym`<sup>Optional</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym"></a>

```go
Synonym *[]*string
```

- *Type:* *[]*string

List of synonyms for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetrics <a name="SemanticViewMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewMetrics {
	SemanticExpression: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.semanticView.SemanticViewMetricsSemanticExpression,
	WindowFunction: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.semanticView.SemanticViewMetricsWindowFunction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression">SemanticExpression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | semantic_expression block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction">WindowFunction</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | window_function block. |

---

##### `SemanticExpression`<sup>Optional</sup> <a name="SemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression"></a>

```go
SemanticExpression SemanticViewMetricsSemanticExpression
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

semantic_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#semantic_expression SemanticView#semantic_expression}

---

##### `WindowFunction`<sup>Optional</sup> <a name="WindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction"></a>

```go
WindowFunction SemanticViewMetricsWindowFunction
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

window_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_function SemanticView#window_function}

---

### SemanticViewMetricsSemanticExpression <a name="SemanticViewMetricsSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewMetricsSemanticExpression {
	QualifiedExpressionName: *string,
	SqlExpression: *string,
	Comment: *string,
	Synonym: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression used to compute the metric. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the semantic expression. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym">Synonym</a></code> | <code>*[]*string</code> | List of synonyms for this semantic expression. |

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName"></a>

```go
QualifiedExpressionName *string
```

- *Type:* *string

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression used to compute the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `Synonym`<sup>Optional</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym"></a>

```go
Synonym *[]*string
```

- *Type:* *[]*string

List of synonyms for this semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetricsWindowFunction <a name="SemanticViewMetricsWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewMetricsWindowFunction {
	OverClause: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.semanticView.SemanticViewMetricsWindowFunctionOverClause,
	QualifiedExpressionName: *string,
	SqlExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause">OverClause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | over_clause block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression used to compute the metric following the `<window_function>(<metric>)` format. |

---

##### `OverClause`<sup>Required</sup> <a name="OverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause"></a>

```go
OverClause SemanticViewMetricsWindowFunctionOverClause
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

over_clause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#over_clause SemanticView#over_clause}

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName"></a>

```go
QualifiedExpressionName *string
```

- *Type:* *string

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression used to compute the metric following the `<window_function>(<metric>)` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

### SemanticViewMetricsWindowFunctionOverClause <a name="SemanticViewMetricsWindowFunctionOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewMetricsWindowFunctionOverClause {
	OrderBy: *string,
	PartitionBy: *string,
	WindowFrameClause: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy">OrderBy</a></code> | <code>*string</code> | Specifies an order by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy">PartitionBy</a></code> | <code>*string</code> | Specifies a partition by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause">WindowFrameClause</a></code> | <code>*string</code> | Specifies a window frame clause. |

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

Specifies an order by clause.

It must be a complete SQL expression, including any `[ ASC | DESC ] [ NULLS { FIRST | LAST } ]` modifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#order_by SemanticView#order_by}

---

##### `PartitionBy`<sup>Optional</sup> <a name="PartitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy"></a>

```go
PartitionBy *string
```

- *Type:* *string

Specifies a partition by clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#partition_by SemanticView#partition_by}

---

##### `WindowFrameClause`<sup>Optional</sup> <a name="WindowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause"></a>

```go
WindowFrameClause *string
```

- *Type:* *string

Specifies a window frame clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_frame_clause SemanticView#window_frame_clause}

---

### SemanticViewRelationships <a name="SemanticViewRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewRelationships {
	ReferencedTableNameOrAlias: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias,
	RelationshipColumns: *[]*string,
	TableNameOrAlias: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.semanticView.SemanticViewRelationshipsTableNameOrAlias,
	ReferencedRelationshipColumns: *[]*string,
	RelationshipIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias">ReferencedTableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | referenced_table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns">RelationshipColumns</a></code> | <code>*[]*string</code> | Specifies one or more columns in the first logical table that refers to columns in another logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias">TableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns">ReferencedRelationshipColumns</a></code> | <code>*[]*string</code> | Specifies one or more columns in the second logical table that are referred to by the first logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier">RelationshipIdentifier</a></code> | <code>*string</code> | Specifies an optional identifier for the relationship. |

---

##### `ReferencedTableNameOrAlias`<sup>Required</sup> <a name="ReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias"></a>

```go
ReferencedTableNameOrAlias SemanticViewRelationshipsReferencedTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

referenced_table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_table_name_or_alias SemanticView#referenced_table_name_or_alias}

---

##### `RelationshipColumns`<sup>Required</sup> <a name="RelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns"></a>

```go
RelationshipColumns *[]*string
```

- *Type:* *[]*string

Specifies one or more columns in the first logical table that refers to columns in another logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_columns SemanticView#relationship_columns}

---

##### `TableNameOrAlias`<sup>Required</sup> <a name="TableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias"></a>

```go
TableNameOrAlias SemanticViewRelationshipsTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name_or_alias SemanticView#table_name_or_alias}

---

##### `ReferencedRelationshipColumns`<sup>Optional</sup> <a name="ReferencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns"></a>

```go
ReferencedRelationshipColumns *[]*string
```

- *Type:* *[]*string

Specifies one or more columns in the second logical table that are referred to by the first logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_relationship_columns SemanticView#referenced_relationship_columns}

---

##### `RelationshipIdentifier`<sup>Optional</sup> <a name="RelationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier"></a>

```go
RelationshipIdentifier *string
```

- *Type:* *string

Specifies an optional identifier for the relationship.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_identifier SemanticView#relationship_identifier}

---

### SemanticViewRelationshipsReferencedTableNameOrAlias <a name="SemanticViewRelationshipsReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewRelationshipsReferencedTableNameOrAlias {
	TableAlias: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias">TableAlias</a></code> | <code>*string</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName">TableName</a></code> | <code>*string</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `TableAlias`<sup>Optional</sup> <a name="TableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias"></a>

```go
TableAlias *string
```

- *Type:* *string

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewRelationshipsTableNameOrAlias <a name="SemanticViewRelationshipsTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewRelationshipsTableNameOrAlias {
	TableAlias: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias">TableAlias</a></code> | <code>*string</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName">TableName</a></code> | <code>*string</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `TableAlias`<sup>Optional</sup> <a name="TableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias"></a>

```go
TableAlias *string
```

- *Type:* *string

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewShowOutput <a name="SemanticViewShowOutput" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewShowOutput {

}
```


### SemanticViewTables <a name="SemanticViewTables" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewTables {
	TableAlias: *string,
	TableName: *string,
	Comment: *string,
	PrimaryKey: *[]*string,
	Synonym: *[]*string,
	Unique: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias">TableAlias</a></code> | <code>*string</code> | Specifies an alias for a logical table in the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName">TableName</a></code> | <code>*string</code> | Specifies an identifier for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey">PrimaryKey</a></code> | <code>*[]*string</code> | Definitions of primary keys in the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym">Synonym</a></code> | <code>*[]*string</code> | List of synonyms for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique">Unique</a></code> | <code>interface{}</code> | unique block. |

---

##### `TableAlias`<sup>Required</sup> <a name="TableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias"></a>

```go
TableAlias *string
```

- *Type:* *string

Specifies an alias for a logical table in the semantic view.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Specifies an identifier for the logical table.

Example: `"\"<db_name>\".\"<schema_name>\".\"<table_name>\""`. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey"></a>

```go
PrimaryKey *[]*string
```

- *Type:* *[]*string

Definitions of primary keys in the logical table.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#primary_key SemanticView#primary_key}

---

##### `Synonym`<sup>Optional</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym"></a>

```go
Synonym *[]*string
```

- *Type:* *[]*string

List of synonyms for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique"></a>

```go
Unique interface{}
```

- *Type:* interface{}

unique block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#unique SemanticView#unique}

---

### SemanticViewTablesUnique <a name="SemanticViewTablesUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewTablesUnique {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values">Values</a></code> | <code>*[]*string</code> | Unique key combinations in the logical table. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Unique key combinations in the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#values SemanticView#values}

---

### SemanticViewTimeouts <a name="SemanticViewTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

&semanticview.SemanticViewTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SemanticViewDimensionsList <a name="SemanticViewDimensionsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get"></a>

```go
func Get(index *f64) SemanticViewDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewDimensionsOutputReference <a name="SemanticViewDimensionsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym">ResetSynonym</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetSynonym` <a name="ResetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym"></a>

```go
func ResetSynonym()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput">QualifiedExpressionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput">SynonymInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym">Synonym</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `QualifiedExpressionNameInput`<sup>Optional</sup> <a name="QualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput"></a>

```go
func QualifiedExpressionNameInput() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SynonymInput`<sup>Optional</sup> <a name="SynonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput"></a>

```go
func SynonymInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName"></a>

```go
func QualifiedExpressionName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `Synonym`<sup>Required</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym"></a>

```go
func Synonym() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewFactsList <a name="SemanticViewFactsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewFactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewFactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get"></a>

```go
func Get(index *f64) SemanticViewFactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewFactsOutputReference <a name="SemanticViewFactsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewFactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewFactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym">ResetSynonym</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetSynonym` <a name="ResetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym"></a>

```go
func ResetSynonym()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput">QualifiedExpressionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput">SynonymInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym">Synonym</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `QualifiedExpressionNameInput`<sup>Optional</sup> <a name="QualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput"></a>

```go
func QualifiedExpressionNameInput() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SynonymInput`<sup>Optional</sup> <a name="SynonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput"></a>

```go
func SynonymInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName"></a>

```go
func QualifiedExpressionName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `Synonym`<sup>Required</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym"></a>

```go
func Synonym() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewMetricsList <a name="SemanticViewMetricsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get"></a>

```go
func Get(index *f64) SemanticViewMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewMetricsOutputReference <a name="SemanticViewMetricsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression">PutSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction">PutWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression">ResetSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction">ResetWindowFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSemanticExpression` <a name="PutSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression"></a>

```go
func PutSemanticExpression(value SemanticViewMetricsSemanticExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `PutWindowFunction` <a name="PutWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction"></a>

```go
func PutWindowFunction(value SemanticViewMetricsWindowFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `ResetSemanticExpression` <a name="ResetSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression"></a>

```go
func ResetSemanticExpression()
```

##### `ResetWindowFunction` <a name="ResetWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction"></a>

```go
func ResetWindowFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression">SemanticExpression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction">WindowFunction</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput">SemanticExpressionInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput">WindowFunctionInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SemanticExpression`<sup>Required</sup> <a name="SemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression"></a>

```go
func SemanticExpression() SemanticViewMetricsSemanticExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a>

---

##### `WindowFunction`<sup>Required</sup> <a name="WindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction"></a>

```go
func WindowFunction() SemanticViewMetricsWindowFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a>

---

##### `SemanticExpressionInput`<sup>Optional</sup> <a name="SemanticExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput"></a>

```go
func SemanticExpressionInput() SemanticViewMetricsSemanticExpression
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `WindowFunctionInput`<sup>Optional</sup> <a name="WindowFunctionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput"></a>

```go
func WindowFunctionInput() SemanticViewMetricsWindowFunction
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewMetricsSemanticExpressionOutputReference <a name="SemanticViewMetricsSemanticExpressionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewMetricsSemanticExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SemanticViewMetricsSemanticExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym">ResetSynonym</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetSynonym` <a name="ResetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym"></a>

```go
func ResetSynonym()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput">QualifiedExpressionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput">SynonymInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym">Synonym</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `QualifiedExpressionNameInput`<sup>Optional</sup> <a name="QualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput"></a>

```go
func QualifiedExpressionNameInput() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SynonymInput`<sup>Optional</sup> <a name="SynonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput"></a>

```go
func SynonymInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName"></a>

```go
func QualifiedExpressionName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `Synonym`<sup>Required</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym"></a>

```go
func Synonym() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() SemanticViewMetricsSemanticExpression
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---


### SemanticViewMetricsWindowFunctionOutputReference <a name="SemanticViewMetricsWindowFunctionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewMetricsWindowFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SemanticViewMetricsWindowFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause">PutOverClause</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverClause` <a name="PutOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause"></a>

```go
func PutOverClause(value SemanticViewMetricsWindowFunctionOverClause)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause">OverClause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput">OverClauseInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput">QualifiedExpressionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName">QualifiedExpressionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverClause`<sup>Required</sup> <a name="OverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause"></a>

```go
func OverClause() SemanticViewMetricsWindowFunctionOverClauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a>

---

##### `OverClauseInput`<sup>Optional</sup> <a name="OverClauseInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput"></a>

```go
func OverClauseInput() SemanticViewMetricsWindowFunctionOverClause
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---

##### `QualifiedExpressionNameInput`<sup>Optional</sup> <a name="QualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput"></a>

```go
func QualifiedExpressionNameInput() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `QualifiedExpressionName`<sup>Required</sup> <a name="QualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName"></a>

```go
func QualifiedExpressionName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() SemanticViewMetricsWindowFunction
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---


### SemanticViewMetricsWindowFunctionOverClauseOutputReference <a name="SemanticViewMetricsWindowFunctionOverClauseOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewMetricsWindowFunctionOverClauseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SemanticViewMetricsWindowFunctionOverClauseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy">ResetPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause">ResetWindowFrameClause</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetPartitionBy` <a name="ResetPartitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy"></a>

```go
func ResetPartitionBy()
```

##### `ResetWindowFrameClause` <a name="ResetWindowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause"></a>

```go
func ResetWindowFrameClause()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput">PartitionByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput">WindowFrameClauseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy">PartitionBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause">WindowFrameClause</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `PartitionByInput`<sup>Optional</sup> <a name="PartitionByInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput"></a>

```go
func PartitionByInput() *string
```

- *Type:* *string

---

##### `WindowFrameClauseInput`<sup>Optional</sup> <a name="WindowFrameClauseInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput"></a>

```go
func WindowFrameClauseInput() *string
```

- *Type:* *string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `PartitionBy`<sup>Required</sup> <a name="PartitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy"></a>

```go
func PartitionBy() *string
```

- *Type:* *string

---

##### `WindowFrameClause`<sup>Required</sup> <a name="WindowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause"></a>

```go
func WindowFrameClause() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue"></a>

```go
func InternalValue() SemanticViewMetricsWindowFunctionOverClause
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


### SemanticViewRelationshipsList <a name="SemanticViewRelationshipsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewRelationshipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewRelationshipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get"></a>

```go
func Get(index *f64) SemanticViewRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewRelationshipsOutputReference <a name="SemanticViewRelationshipsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewRelationshipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewRelationshipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias">PutReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias">PutTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns">ResetReferencedRelationshipColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier">ResetRelationshipIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReferencedTableNameOrAlias` <a name="PutReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias"></a>

```go
func PutReferencedTableNameOrAlias(value SemanticViewRelationshipsReferencedTableNameOrAlias)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `PutTableNameOrAlias` <a name="PutTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias"></a>

```go
func PutTableNameOrAlias(value SemanticViewRelationshipsTableNameOrAlias)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `ResetReferencedRelationshipColumns` <a name="ResetReferencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns"></a>

```go
func ResetReferencedRelationshipColumns()
```

##### `ResetRelationshipIdentifier` <a name="ResetRelationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier"></a>

```go
func ResetRelationshipIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias">ReferencedTableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias">TableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput">ReferencedRelationshipColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput">ReferencedTableNameOrAliasInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput">RelationshipColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput">RelationshipIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput">TableNameOrAliasInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns">ReferencedRelationshipColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns">RelationshipColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier">RelationshipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferencedTableNameOrAlias`<sup>Required</sup> <a name="ReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias"></a>

```go
func ReferencedTableNameOrAlias() SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a>

---

##### `TableNameOrAlias`<sup>Required</sup> <a name="TableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias"></a>

```go
func TableNameOrAlias() SemanticViewRelationshipsTableNameOrAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a>

---

##### `ReferencedRelationshipColumnsInput`<sup>Optional</sup> <a name="ReferencedRelationshipColumnsInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput"></a>

```go
func ReferencedRelationshipColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReferencedTableNameOrAliasInput`<sup>Optional</sup> <a name="ReferencedTableNameOrAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput"></a>

```go
func ReferencedTableNameOrAliasInput() SemanticViewRelationshipsReferencedTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `RelationshipColumnsInput`<sup>Optional</sup> <a name="RelationshipColumnsInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput"></a>

```go
func RelationshipColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RelationshipIdentifierInput`<sup>Optional</sup> <a name="RelationshipIdentifierInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput"></a>

```go
func RelationshipIdentifierInput() *string
```

- *Type:* *string

---

##### `TableNameOrAliasInput`<sup>Optional</sup> <a name="TableNameOrAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput"></a>

```go
func TableNameOrAliasInput() SemanticViewRelationshipsTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `ReferencedRelationshipColumns`<sup>Required</sup> <a name="ReferencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns"></a>

```go
func ReferencedRelationshipColumns() *[]*string
```

- *Type:* *[]*string

---

##### `RelationshipColumns`<sup>Required</sup> <a name="RelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns"></a>

```go
func RelationshipColumns() *[]*string
```

- *Type:* *[]*string

---

##### `RelationshipIdentifier`<sup>Required</sup> <a name="RelationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier"></a>

```go
func RelationshipIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewRelationshipsReferencedTableNameOrAliasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias">ResetTableAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTableAlias` <a name="ResetTableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias"></a>

```go
func ResetTableAlias()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput">TableAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias">TableAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableAliasInput`<sup>Optional</sup> <a name="TableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```go
func TableAliasInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TableAlias`<sup>Required</sup> <a name="TableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias"></a>

```go
func TableAlias() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue"></a>

```go
func InternalValue() SemanticViewRelationshipsReferencedTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---


### SemanticViewRelationshipsTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewRelationshipsTableNameOrAliasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SemanticViewRelationshipsTableNameOrAliasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias">ResetTableAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTableAlias` <a name="ResetTableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias"></a>

```go
func ResetTableAlias()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput">TableAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias">TableAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableAliasInput`<sup>Optional</sup> <a name="TableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```go
func TableAliasInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TableAlias`<sup>Required</sup> <a name="TableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias"></a>

```go
func TableAlias() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue"></a>

```go
func InternalValue() SemanticViewRelationshipsTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---


### SemanticViewShowOutputList <a name="SemanticViewShowOutputList" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get"></a>

```go
func Get(index *f64) SemanticViewShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SemanticViewShowOutputOutputReference <a name="SemanticViewShowOutputOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension">Extension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension"></a>

```go
func Extension() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SemanticViewShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a>

---


### SemanticViewTablesList <a name="SemanticViewTablesList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get"></a>

```go
func Get(index *f64) SemanticViewTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewTablesOutputReference <a name="SemanticViewTablesOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique">PutUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym">ResetSynonym</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique">ResetUnique</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUnique` <a name="PutUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique"></a>

```go
func PutUnique(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey"></a>

```go
func ResetPrimaryKey()
```

##### `ResetSynonym` <a name="ResetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym"></a>

```go
func ResetSynonym()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique"></a>

```go
func ResetUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique">Unique</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput">SynonymInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput">TableAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput">UniqueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym">Synonym</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias">TableAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique"></a>

```go
func Unique() SemanticViewTablesUniqueList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() *[]*string
```

- *Type:* *[]*string

---

##### `SynonymInput`<sup>Optional</sup> <a name="SynonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput"></a>

```go
func SynonymInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableAliasInput`<sup>Optional</sup> <a name="TableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput"></a>

```go
func TableAliasInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput"></a>

```go
func UniqueInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() *[]*string
```

- *Type:* *[]*string

---

##### `Synonym`<sup>Required</sup> <a name="Synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym"></a>

```go
func Synonym() *[]*string
```

- *Type:* *[]*string

---

##### `TableAlias`<sup>Required</sup> <a name="TableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias"></a>

```go
func TableAlias() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewTablesUniqueList <a name="SemanticViewTablesUniqueList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewTablesUniqueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SemanticViewTablesUniqueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get"></a>

```go
func Get(index *f64) SemanticViewTablesUniqueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewTablesUniqueOutputReference <a name="SemanticViewTablesUniqueOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewTablesUniqueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SemanticViewTablesUniqueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SemanticViewTimeoutsOutputReference <a name="SemanticViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/semanticview"

semanticview.NewSemanticViewTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SemanticViewTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



