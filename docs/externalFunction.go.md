# `externalFunction` Submodule <a name="`externalFunction` Submodule" id="@cdktf/provider-snowflake.externalFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalFunction <a name="ExternalFunction" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function snowflake_external_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.NewExternalFunction(scope Construct, id *string, config ExternalFunctionConfig) ExternalFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig">ExternalFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig">ExternalFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg">PutArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg">ResetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders">ResetContextHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows">ResetMaxBatchRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior">ResetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator">ResetRequestTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator">ResetResponseTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed">ResetReturnNullAllowed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutArg` <a name="PutArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg"></a>

```go
func PutArg(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArg` <a name="ResetArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg"></a>

```go
func ResetArg()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetContextHeaders` <a name="ResetContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders"></a>

```go
func ResetContextHeaders()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxBatchRows` <a name="ResetMaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows"></a>

```go
func ResetMaxBatchRows()
```

##### `ResetNullInputBehavior` <a name="ResetNullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior"></a>

```go
func ResetNullInputBehavior()
```

##### `ResetRequestTranslator` <a name="ResetRequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator"></a>

```go
func ResetRequestTranslator()
```

##### `ResetResponseTranslator` <a name="ResetResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator"></a>

```go
func ResetResponseTranslator()
```

##### `ResetReturnNullAllowed` <a name="ResetReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed"></a>

```go
func ResetReturnNullAllowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.ExternalFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.ExternalFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.ExternalFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.ExternalFunction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExternalFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExternalFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExternalFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg">Arg</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header">Header</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput">ApiIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput">ArgInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput">ContextHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput">MaxBatchRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput">NullInputBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput">RequestTranslatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput">ResponseTranslatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput">ReturnBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput">ReturnNullAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput">ReturnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput">UrlOfProxyAndResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration">ApiIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders">ContextHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows">MaxBatchRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior">NullInputBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator">RequestTranslator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator">ResponseTranslator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior">ReturnBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed">ReturnNullAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType">ReturnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource">UrlOfProxyAndResource</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arg`<sup>Required</sup> <a name="Arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg"></a>

```go
func Arg() ExternalFunctionArgList
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header"></a>

```go
func Header() ExternalFunctionHeaderList
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a>

---

##### `ApiIntegrationInput`<sup>Optional</sup> <a name="ApiIntegrationInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput"></a>

```go
func ApiIntegrationInput() *string
```

- *Type:* *string

---

##### `ArgInput`<sup>Optional</sup> <a name="ArgInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput"></a>

```go
func ArgInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `ContextHeadersInput`<sup>Optional</sup> <a name="ContextHeadersInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput"></a>

```go
func ContextHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxBatchRowsInput`<sup>Optional</sup> <a name="MaxBatchRowsInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput"></a>

```go
func MaxBatchRowsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullInputBehaviorInput`<sup>Optional</sup> <a name="NullInputBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput"></a>

```go
func NullInputBehaviorInput() *string
```

- *Type:* *string

---

##### `RequestTranslatorInput`<sup>Optional</sup> <a name="RequestTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput"></a>

```go
func RequestTranslatorInput() *string
```

- *Type:* *string

---

##### `ResponseTranslatorInput`<sup>Optional</sup> <a name="ResponseTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput"></a>

```go
func ResponseTranslatorInput() *string
```

- *Type:* *string

---

##### `ReturnBehaviorInput`<sup>Optional</sup> <a name="ReturnBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput"></a>

```go
func ReturnBehaviorInput() *string
```

- *Type:* *string

---

##### `ReturnNullAllowedInput`<sup>Optional</sup> <a name="ReturnNullAllowedInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput"></a>

```go
func ReturnNullAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput"></a>

```go
func ReturnTypeInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `UrlOfProxyAndResourceInput`<sup>Optional</sup> <a name="UrlOfProxyAndResourceInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput"></a>

```go
func UrlOfProxyAndResourceInput() *string
```

- *Type:* *string

---

##### `ApiIntegration`<sup>Required</sup> <a name="ApiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration"></a>

```go
func ApiIntegration() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `ContextHeaders`<sup>Required</sup> <a name="ContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders"></a>

```go
func ContextHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxBatchRows`<sup>Required</sup> <a name="MaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows"></a>

```go
func MaxBatchRows() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NullInputBehavior`<sup>Required</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior"></a>

```go
func NullInputBehavior() *string
```

- *Type:* *string

---

##### `RequestTranslator`<sup>Required</sup> <a name="RequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator"></a>

```go
func RequestTranslator() *string
```

- *Type:* *string

---

##### `ResponseTranslator`<sup>Required</sup> <a name="ResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator"></a>

```go
func ResponseTranslator() *string
```

- *Type:* *string

---

##### `ReturnBehavior`<sup>Required</sup> <a name="ReturnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior"></a>

```go
func ReturnBehavior() *string
```

- *Type:* *string

---

##### `ReturnNullAllowed`<sup>Required</sup> <a name="ReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed"></a>

```go
func ReturnNullAllowed() interface{}
```

- *Type:* interface{}

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType"></a>

```go
func ReturnType() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `UrlOfProxyAndResource`<sup>Required</sup> <a name="UrlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource"></a>

```go
func UrlOfProxyAndResource() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalFunctionArg <a name="ExternalFunctionArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

&externalfunction.ExternalFunctionArg {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name">Name</a></code> | <code>*string</code> | Argument name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type">Type</a></code> | <code>*string</code> | Argument type, e.g. VARCHAR. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name"></a>

```go
Name *string
```

- *Type:* *string

Argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type"></a>

```go
Type *string
```

- *Type:* *string

Argument type, e.g. VARCHAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#type ExternalFunction#type}

---

### ExternalFunctionConfig <a name="ExternalFunctionConfig" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

&externalfunction.ExternalFunctionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiIntegration: *string,
	Database: *string,
	Name: *string,
	ReturnBehavior: *string,
	ReturnType: *string,
	Schema: *string,
	UrlOfProxyAndResource: *string,
	Arg: interface{},
	Comment: *string,
	Compression: *string,
	ContextHeaders: *[]*string,
	Header: interface{},
	Id: *string,
	MaxBatchRows: *f64,
	NullInputBehavior: *string,
	RequestTranslator: *string,
	ResponseTranslator: *string,
	ReturnNullAllowed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration">ApiIntegration</a></code> | <code>*string</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior">ReturnBehavior</a></code> | <code>*string</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType">ReturnType</a></code> | <code>*string</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource">UrlOfProxyAndResource</a></code> | <code>*string</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg">Arg</a></code> | <code>interface{}</code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment">Comment</a></code> | <code>*string</code> | A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression">Compression</a></code> | <code>*string</code> | If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders">ContextHeaders</a></code> | <code>*[]*string</code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows">MaxBatchRows</a></code> | <code>*f64</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior">NullInputBehavior</a></code> | <code>*string</code> | Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator">RequestTranslator</a></code> | <code>*string</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator">ResponseTranslator</a></code> | <code>*string</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed">ReturnNullAllowed</a></code> | <code>interface{}</code> | Indicates whether the function can return NULL values or must return only NON-NULL values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiIntegration`<sup>Required</sup> <a name="ApiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration"></a>

```go
ApiIntegration *string
```

- *Type:* *string

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `ReturnBehavior`<sup>Required</sup> <a name="ReturnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior"></a>

```go
ReturnBehavior *string
```

- *Type:* *string

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType"></a>

```go
ReturnType *string
```

- *Type:* *string

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `UrlOfProxyAndResource`<sup>Required</sup> <a name="UrlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource"></a>

```go
UrlOfProxyAndResource *string
```

- *Type:* *string

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `Arg`<sup>Optional</sup> <a name="Arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg"></a>

```go
Arg interface{}
```

- *Type:* interface{}

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `ContextHeaders`<sup>Optional</sup> <a name="ContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders"></a>

```go
ContextHeaders *[]*string
```

- *Type:* *[]*string

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxBatchRows`<sup>Optional</sup> <a name="MaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows"></a>

```go
MaxBatchRows *f64
```

- *Type:* *f64

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `NullInputBehavior`<sup>Optional</sup> <a name="NullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior"></a>

```go
NullInputBehavior *string
```

- *Type:* *string

Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `RequestTranslator`<sup>Optional</sup> <a name="RequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator"></a>

```go
RequestTranslator *string
```

- *Type:* *string

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `ResponseTranslator`<sup>Optional</sup> <a name="ResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator"></a>

```go
ResponseTranslator *string
```

- *Type:* *string

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `ReturnNullAllowed`<sup>Optional</sup> <a name="ReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed"></a>

```go
ReturnNullAllowed interface{}
```

- *Type:* interface{}

Indicates whether the function can return NULL values or must return only NON-NULL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

### ExternalFunctionHeader <a name="ExternalFunctionHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

&externalfunction.ExternalFunctionHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name">Name</a></code> | <code>*string</code> | Header name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value">Value</a></code> | <code>*string</code> | Header value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/external_function#value ExternalFunction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalFunctionArgList <a name="ExternalFunctionArgList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.NewExternalFunctionArgList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalFunctionArgList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get"></a>

```go
func Get(index *f64) ExternalFunctionArgOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalFunctionArgOutputReference <a name="ExternalFunctionArgOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.NewExternalFunctionArgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalFunctionArgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalFunctionHeaderList <a name="ExternalFunctionHeaderList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.NewExternalFunctionHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalFunctionHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get"></a>

```go
func Get(index *f64) ExternalFunctionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalFunctionHeaderOutputReference <a name="ExternalFunctionHeaderOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/externalfunction"

externalfunction.NewExternalFunctionHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalFunctionHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



