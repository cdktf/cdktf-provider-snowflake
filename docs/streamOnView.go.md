# `streamOnView` Submodule <a name="`streamOnView` Submodule" id="@cdktf/provider-snowflake.streamOnView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamOnView <a name="StreamOnView" id="@cdktf/provider-snowflake.streamOnView.StreamOnView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view snowflake_stream_on_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnView(scope Construct, id *string, config StreamOnViewConfig) StreamOnView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig">StreamOnViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig">StreamOnViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt">PutAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore">PutBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAppendOnly">ResetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAt">ResetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetBefore">ResetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetCopyGrants">ResetCopyGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetShowInitialRows">ResetShowInitialRows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAt` <a name="PutAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt"></a>

```go
func PutAt(value StreamOnViewAt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---

##### `PutBefore` <a name="PutBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore"></a>

```go
func PutBefore(value StreamOnViewBefore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---

##### `ResetAppendOnly` <a name="ResetAppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAppendOnly"></a>

```go
func ResetAppendOnly()
```

##### `ResetAt` <a name="ResetAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAt"></a>

```go
func ResetAt()
```

##### `ResetBefore` <a name="ResetBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetBefore"></a>

```go
func ResetBefore()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCopyGrants` <a name="ResetCopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetCopyGrants"></a>

```go
func ResetCopyGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetId"></a>

```go
func ResetId()
```

##### `ResetShowInitialRows` <a name="ResetShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetShowInitialRows"></a>

```go
func ResetShowInitialRows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamOnView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.StreamOnView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.StreamOnView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.StreamOnView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.StreamOnView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamOnView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamOnView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamOnView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamOnView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.at">At</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference">StreamOnViewAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.before">Before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference">StreamOnViewBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList">StreamOnViewDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList">StreamOnViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.stale">Stale</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.streamType">StreamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnlyInput">AppendOnlyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.atInput">AtInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.beforeInput">BeforeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrantsInput">CopyGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRowsInput">ShowInitialRowsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnly">AppendOnly</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrants">CopyGrants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRows">ShowInitialRows</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `At`<sup>Required</sup> <a name="At" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.at"></a>

```go
func At() StreamOnViewAtOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference">StreamOnViewAtOutputReference</a>

---

##### `Before`<sup>Required</sup> <a name="Before" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.before"></a>

```go
func Before() StreamOnViewBeforeOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference">StreamOnViewBeforeOutputReference</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.describeOutput"></a>

```go
func DescribeOutput() StreamOnViewDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList">StreamOnViewDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showOutput"></a>

```go
func ShowOutput() StreamOnViewShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList">StreamOnViewShowOutputList</a>

---

##### `Stale`<sup>Required</sup> <a name="Stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.stale"></a>

```go
func Stale() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StreamType`<sup>Required</sup> <a name="StreamType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.streamType"></a>

```go
func StreamType() *string
```

- *Type:* *string

---

##### `AppendOnlyInput`<sup>Optional</sup> <a name="AppendOnlyInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnlyInput"></a>

```go
func AppendOnlyInput() *string
```

- *Type:* *string

---

##### `AtInput`<sup>Optional</sup> <a name="AtInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.atInput"></a>

```go
func AtInput() StreamOnViewAt
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---

##### `BeforeInput`<sup>Optional</sup> <a name="BeforeInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.beforeInput"></a>

```go
func BeforeInput() StreamOnViewBefore
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CopyGrantsInput`<sup>Optional</sup> <a name="CopyGrantsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrantsInput"></a>

```go
func CopyGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `ShowInitialRowsInput`<sup>Optional</sup> <a name="ShowInitialRowsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRowsInput"></a>

```go
func ShowInitialRowsInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnly"></a>

```go
func AppendOnly() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CopyGrants`<sup>Required</sup> <a name="CopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrants"></a>

```go
func CopyGrants() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `ShowInitialRows`<sup>Required</sup> <a name="ShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRows"></a>

```go
func ShowInitialRows() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamOnViewAt <a name="StreamOnViewAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

&streamonview.StreamOnViewAt {
	Offset: *string,
	Statement: *string,
	Stream: *string,
	Timestamp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.offset">Offset</a></code> | <code>*string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.statement">Statement</a></code> | <code>*string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.stream">Stream</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.timestamp">Timestamp</a></code> | <code>*string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#offset StreamOnView#offset}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.statement"></a>

```go
Statement *string
```

- *Type:* *string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#statement StreamOnView#statement}

---

##### `Stream`<sup>Optional</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.stream"></a>

```go
Stream *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#stream StreamOnView#stream}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#timestamp StreamOnView#timestamp}

---

### StreamOnViewBefore <a name="StreamOnViewBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

&streamonview.StreamOnViewBefore {
	Offset: *string,
	Statement: *string,
	Stream: *string,
	Timestamp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.offset">Offset</a></code> | <code>*string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.statement">Statement</a></code> | <code>*string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.stream">Stream</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.timestamp">Timestamp</a></code> | <code>*string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#offset StreamOnView#offset}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.statement"></a>

```go
Statement *string
```

- *Type:* *string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#statement StreamOnView#statement}

---

##### `Stream`<sup>Optional</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.stream"></a>

```go
Stream *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#stream StreamOnView#stream}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#timestamp StreamOnView#timestamp}

---

### StreamOnViewConfig <a name="StreamOnViewConfig" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

&streamonview.StreamOnViewConfig {
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
	View: *string,
	AppendOnly: *string,
	At: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.streamOnView.StreamOnViewAt,
	Before: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.streamOnView.StreamOnViewBefore,
	Comment: *string,
	CopyGrants: interface{},
	Id: *string,
	ShowInitialRows: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.view">View</a></code> | <code>*string</code> | Specifies an identifier for the view the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.appendOnly">AppendOnly</a></code> | <code>*string</code> | Specifies whether this is an append-only stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.at">At</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | at block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.before">Before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | before block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.copyGrants">CopyGrants</a></code> | <code>interface{}</code> | Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#id StreamOnView#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.showInitialRows">ShowInitialRows</a></code> | <code>*string</code> | Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the stream.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#database StreamOnView#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#name StreamOnView#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the stream.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#schema StreamOnView#schema}

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Specifies an identifier for the view the stream will monitor.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./view).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#view StreamOnView#view}

---

##### `AppendOnly`<sup>Optional</sup> <a name="AppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.appendOnly"></a>

```go
AppendOnly *string
```

- *Type:* *string

Specifies whether this is an append-only stream.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#append_only StreamOnView#append_only}

---

##### `At`<sup>Optional</sup> <a name="At" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.at"></a>

```go
At StreamOnViewAt
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#at StreamOnView#at}

---

##### `Before`<sup>Optional</sup> <a name="Before" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.before"></a>

```go
Before StreamOnViewBefore
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

before block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#before StreamOnView#before}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#comment StreamOnView#comment}

---

##### `CopyGrants`<sup>Optional</sup> <a name="CopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.copyGrants"></a>

```go
CopyGrants interface{}
```

- *Type:* interface{}

Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause.

This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#copy_grants StreamOnView#copy_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#id StreamOnView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShowInitialRows`<sup>Optional</sup> <a name="ShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.showInitialRows"></a>

```go
ShowInitialRows *string
```

- *Type:* *string

Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/stream_on_view#show_initial_rows StreamOnView#show_initial_rows}

---

### StreamOnViewDescribeOutput <a name="StreamOnViewDescribeOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

&streamonview.StreamOnViewDescribeOutput {

}
```


### StreamOnViewShowOutput <a name="StreamOnViewShowOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

&streamonview.StreamOnViewShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### StreamOnViewAtOutputReference <a name="StreamOnViewAtOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnViewAtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamOnViewAtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStream">ResetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStatement"></a>

```go
func ResetStatement()
```

##### `ResetStream` <a name="ResetStream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStream"></a>

```go
func ResetStream()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetTimestamp"></a>

```go
func ResetTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statementInput">StatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.streamInput">StreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statement">Statement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.stream">Stream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statementInput"></a>

```go
func StatementInput() *string
```

- *Type:* *string

---

##### `StreamInput`<sup>Optional</sup> <a name="StreamInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.streamInput"></a>

```go
func StreamInput() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statement"></a>

```go
func Statement() *string
```

- *Type:* *string

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.stream"></a>

```go
func Stream() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamOnViewAt
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---


### StreamOnViewBeforeOutputReference <a name="StreamOnViewBeforeOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnViewBeforeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamOnViewBeforeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStream">ResetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStatement"></a>

```go
func ResetStatement()
```

##### `ResetStream` <a name="ResetStream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStream"></a>

```go
func ResetStream()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetTimestamp"></a>

```go
func ResetTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statementInput">StatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.streamInput">StreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statement">Statement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.stream">Stream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statementInput"></a>

```go
func StatementInput() *string
```

- *Type:* *string

---

##### `StreamInput`<sup>Optional</sup> <a name="StreamInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.streamInput"></a>

```go
func StreamInput() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statement"></a>

```go
func Statement() *string
```

- *Type:* *string

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.stream"></a>

```go
func Stream() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamOnViewBefore
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---


### StreamOnViewDescribeOutputList <a name="StreamOnViewDescribeOutputList" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnViewDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StreamOnViewDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get"></a>

```go
func Get(index *f64) StreamOnViewDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StreamOnViewDescribeOutputOutputReference <a name="StreamOnViewDescribeOutputOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnViewDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StreamOnViewDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.baseTables">BaseTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.invalidReason">InvalidReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.stale">Stale</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.staleAfter">StaleAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput">StreamOnViewDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseTables`<sup>Required</sup> <a name="BaseTables" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.baseTables"></a>

```go
func BaseTables() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InvalidReason`<sup>Required</sup> <a name="InvalidReason" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.invalidReason"></a>

```go
func InvalidReason() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `Stale`<sup>Required</sup> <a name="Stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.stale"></a>

```go
func Stale() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StaleAfter`<sup>Required</sup> <a name="StaleAfter" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.staleAfter"></a>

```go
func StaleAfter() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamOnViewDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput">StreamOnViewDescribeOutput</a>

---


### StreamOnViewShowOutputList <a name="StreamOnViewShowOutputList" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnViewShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StreamOnViewShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get"></a>

```go
func Get(index *f64) StreamOnViewShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StreamOnViewShowOutputOutputReference <a name="StreamOnViewShowOutputOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/streamonview"

streamonview.NewStreamOnViewShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StreamOnViewShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.baseTables">BaseTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.invalidReason">InvalidReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.stale">Stale</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.staleAfter">StaleAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput">StreamOnViewShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseTables`<sup>Required</sup> <a name="BaseTables" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.baseTables"></a>

```go
func BaseTables() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InvalidReason`<sup>Required</sup> <a name="InvalidReason" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.invalidReason"></a>

```go
func InvalidReason() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `Stale`<sup>Required</sup> <a name="Stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.stale"></a>

```go
func Stale() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StaleAfter`<sup>Required</sup> <a name="StaleAfter" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.staleAfter"></a>

```go
func StaleAfter() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamOnViewShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput">StreamOnViewShowOutput</a>

---



