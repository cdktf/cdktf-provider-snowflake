# `resourceMonitorGrant` Submodule <a name="`resourceMonitorGrant` Submodule" id="@cdktf/provider-snowflake.resourceMonitorGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitorGrant <a name="ResourceMonitorGrant" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant snowflake_resource_monitor_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/resourcemonitorgrant"

resourcemonitorgrant.NewResourceMonitorGrant(scope Construct, id *string, config ResourceMonitorGrantConfig) ResourceMonitorGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig">ResourceMonitorGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig">ResourceMonitorGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetEnableMultipleGrants"></a>

```go
func ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetPrivilege"></a>

```go
func ResetPrivilege()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetRoles"></a>

```go
func ResetRoles()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetWithGrantOption"></a>

```go
func ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceMonitorGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/resourcemonitorgrant"

resourcemonitorgrant.ResourceMonitorGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/resourcemonitorgrant"

resourcemonitorgrant.ResourceMonitorGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/resourcemonitorgrant"

resourcemonitorgrant.ResourceMonitorGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/resourcemonitorgrant"

resourcemonitorgrant.ResourceMonitorGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourceMonitorGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceMonitorGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceMonitorGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourceMonitorGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorNameInput">MonitorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorName">MonitorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilege">Privilege</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrantsInput"></a>

```go
func EnableMultipleGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorNameInput"></a>

```go
func MonitorNameInput() *string
```

- *Type:* *string

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilegeInput"></a>

```go
func PrivilegeInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOptionInput"></a>

```go
func WithGrantOptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrants"></a>

```go
func EnableMultipleGrants() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorName"></a>

```go
func MonitorName() *string
```

- *Type:* *string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilege"></a>

```go
func Privilege() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOption"></a>

```go
func WithGrantOption() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceMonitorGrantConfig <a name="ResourceMonitorGrantConfig" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/resourcemonitorgrant"

&resourcemonitorgrant.ResourceMonitorGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorName: *string,
	EnableMultipleGrants: interface{},
	Id: *string,
	Privilege: *string,
	Roles: *[]*string,
	WithGrantOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.monitorName">MonitorName</a></code> | <code>*string</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#id ResourceMonitorGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.privilege">Privilege</a></code> | <code>*string</code> | The privilege to grant on the resource monitor. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.monitorName"></a>

```go
MonitorName *string
```

- *Type:* *string

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#monitor_name ResourceMonitorGrant#monitor_name}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.enableMultipleGrants"></a>

```go
EnableMultipleGrants interface{}
```

- *Type:* interface{}

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#enable_multiple_grants ResourceMonitorGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#id ResourceMonitorGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.privilege"></a>

```go
Privilege *string
```

- *Type:* *string

The privilege to grant on the resource monitor. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#privilege ResourceMonitorGrant#privilege}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#roles ResourceMonitorGrant#roles}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.withGrantOption"></a>

```go
WithGrantOption interface{}
```

- *Type:* interface{}

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/resource_monitor_grant#with_grant_option ResourceMonitorGrant#with_grant_option}

---



