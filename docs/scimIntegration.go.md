# `scimIntegration` Submodule <a name="`scimIntegration` Submodule" id="@cdktf/provider-snowflake.scimIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimIntegration <a name="ScimIntegration" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration snowflake_scim_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegration(scope Construct, id *string, config ScimIntegrationConfig) ScimIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig">ScimIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig">ScimIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetSyncPassword">ResetSyncPassword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetNetworkPolicy"></a>

```go
func ResetNetworkPolicy()
```

##### `ResetSyncPassword` <a name="ResetSyncPassword" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetSyncPassword"></a>

```go
func ResetSyncPassword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ScimIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.ScimIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.ScimIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.ScimIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.ScimIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ScimIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ScimIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ScimIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ScimIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList">ScimIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList">ScimIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.runAsRoleInput">RunAsRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClientInput">ScimClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.syncPasswordInput">SyncPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.runAsRole">RunAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClient">ScimClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.syncPassword">SyncPassword</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.describeOutput"></a>

```go
func DescribeOutput() ScimIntegrationDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList">ScimIntegrationDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.showOutput"></a>

```go
func ShowOutput() ScimIntegrationShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList">ScimIntegrationShowOutputList</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicyInput"></a>

```go
func NetworkPolicyInput() *string
```

- *Type:* *string

---

##### `RunAsRoleInput`<sup>Optional</sup> <a name="RunAsRoleInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.runAsRoleInput"></a>

```go
func RunAsRoleInput() *string
```

- *Type:* *string

---

##### `ScimClientInput`<sup>Optional</sup> <a name="ScimClientInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClientInput"></a>

```go
func ScimClientInput() *string
```

- *Type:* *string

---

##### `SyncPasswordInput`<sup>Optional</sup> <a name="SyncPasswordInput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.syncPasswordInput"></a>

```go
func SyncPasswordInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicy"></a>

```go
func NetworkPolicy() *string
```

- *Type:* *string

---

##### `RunAsRole`<sup>Required</sup> <a name="RunAsRole" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.runAsRole"></a>

```go
func RunAsRole() *string
```

- *Type:* *string

---

##### `ScimClient`<sup>Required</sup> <a name="ScimClient" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClient"></a>

```go
func ScimClient() *string
```

- *Type:* *string

---

##### `SyncPassword`<sup>Required</sup> <a name="SyncPassword" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.syncPassword"></a>

```go
func SyncPassword() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ScimIntegrationConfig <a name="ScimIntegrationConfig" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	RunAsRole: *string,
	ScimClient: *string,
	Comment: *string,
	Id: *string,
	NetworkPolicy: *string,
	SyncPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specify whether the security integration is enabled. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.runAsRole">RunAsRole</a></code> | <code>*string</code> | Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.scimClient">ScimClient</a></code> | <code>*string</code> | Specifies the client type for the scim integration. Valid options are: `OKTA` \| `AZURE` \| `GENERIC`. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#id ScimIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | Specifies an existing network policy that controls SCIM network traffic. For more information about this resource, see [docs](./network_policy). |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.syncPassword">SyncPassword</a></code> | <code>*string</code> | Specifies whether to enable or disable the synchronization of a user password from an Okta SCIM client as part of the API request to Snowflake. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specify whether the security integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#enabled ScimIntegration#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#name ScimIntegration#name}

---

##### `RunAsRole`<sup>Required</sup> <a name="RunAsRole" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.runAsRole"></a>

```go
RunAsRole *string
```

- *Type:* *string

Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM.

Provider assumes that the specified role is already provided. Valid options are: `OKTA_PROVISIONER` | `AAD_PROVISIONER` | `GENERIC_SCIM_PROVISIONER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#run_as_role ScimIntegration#run_as_role}

---

##### `ScimClient`<sup>Required</sup> <a name="ScimClient" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.scimClient"></a>

```go
ScimClient *string
```

- *Type:* *string

Specifies the client type for the scim integration. Valid options are: `OKTA` | `AZURE` | `GENERIC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#scim_client ScimIntegration#scim_client}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#comment ScimIntegration#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#id ScimIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.networkPolicy"></a>

```go
NetworkPolicy *string
```

- *Type:* *string

Specifies an existing network policy that controls SCIM network traffic. For more information about this resource, see [docs](./network_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#network_policy ScimIntegration#network_policy}

---

##### `SyncPassword`<sup>Optional</sup> <a name="SyncPassword" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.syncPassword"></a>

```go
SyncPassword *string
```

- *Type:* *string

Specifies whether to enable or disable the synchronization of a user password from an Okta SCIM client as part of the API request to Snowflake.

This property is not supported for Azure SCIM. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/scim_integration#sync_password ScimIntegration#sync_password}

---

### ScimIntegrationDescribeOutput <a name="ScimIntegrationDescribeOutput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationDescribeOutput {

}
```


### ScimIntegrationDescribeOutputComment <a name="ScimIntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputComment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationDescribeOutputComment {

}
```


### ScimIntegrationDescribeOutputEnabled <a name="ScimIntegrationDescribeOutputEnabled" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabled.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationDescribeOutputEnabled {

}
```


### ScimIntegrationDescribeOutputNetworkPolicy <a name="ScimIntegrationDescribeOutputNetworkPolicy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationDescribeOutputNetworkPolicy {

}
```


### ScimIntegrationDescribeOutputRunAsRole <a name="ScimIntegrationDescribeOutputRunAsRole" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationDescribeOutputRunAsRole {

}
```


### ScimIntegrationDescribeOutputSyncPassword <a name="ScimIntegrationDescribeOutputSyncPassword" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationDescribeOutputSyncPassword {

}
```


### ScimIntegrationShowOutput <a name="ScimIntegrationShowOutput" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

&scimintegration.ScimIntegrationShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ScimIntegrationDescribeOutputCommentList <a name="ScimIntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputCommentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationDescribeOutputCommentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.get"></a>

```go
func Get(index *f64) ScimIntegrationDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationDescribeOutputCommentOutputReference <a name="ScimIntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputCommentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationDescribeOutputCommentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputComment">ScimIntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationDescribeOutputComment
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputComment">ScimIntegrationDescribeOutputComment</a>

---


### ScimIntegrationDescribeOutputEnabledList <a name="ScimIntegrationDescribeOutputEnabledList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputEnabledList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationDescribeOutputEnabledList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.get"></a>

```go
func Get(index *f64) ScimIntegrationDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationDescribeOutputEnabledOutputReference <a name="ScimIntegrationDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputEnabledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationDescribeOutputEnabledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabled">ScimIntegrationDescribeOutputEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationDescribeOutputEnabled
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabled">ScimIntegrationDescribeOutputEnabled</a>

---


### ScimIntegrationDescribeOutputList <a name="ScimIntegrationDescribeOutputList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.get"></a>

```go
func Get(index *f64) ScimIntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationDescribeOutputNetworkPolicyList <a name="ScimIntegrationDescribeOutputNetworkPolicyList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputNetworkPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationDescribeOutputNetworkPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.get"></a>

```go
func Get(index *f64) ScimIntegrationDescribeOutputNetworkPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationDescribeOutputNetworkPolicyOutputReference <a name="ScimIntegrationDescribeOutputNetworkPolicyOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputNetworkPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationDescribeOutputNetworkPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicy">ScimIntegrationDescribeOutputNetworkPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationDescribeOutputNetworkPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicy">ScimIntegrationDescribeOutputNetworkPolicy</a>

---


### ScimIntegrationDescribeOutputOutputReference <a name="ScimIntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList">ScimIntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList">ScimIntegrationDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.networkPolicy">NetworkPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList">ScimIntegrationDescribeOutputNetworkPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.runAsRole">RunAsRole</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList">ScimIntegrationDescribeOutputRunAsRoleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.syncPassword">SyncPassword</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList">ScimIntegrationDescribeOutputSyncPasswordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutput">ScimIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() ScimIntegrationDescribeOutputCommentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputCommentList">ScimIntegrationDescribeOutputCommentList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() ScimIntegrationDescribeOutputEnabledList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputEnabledList">ScimIntegrationDescribeOutputEnabledList</a>

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.networkPolicy"></a>

```go
func NetworkPolicy() ScimIntegrationDescribeOutputNetworkPolicyList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputNetworkPolicyList">ScimIntegrationDescribeOutputNetworkPolicyList</a>

---

##### `RunAsRole`<sup>Required</sup> <a name="RunAsRole" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.runAsRole"></a>

```go
func RunAsRole() ScimIntegrationDescribeOutputRunAsRoleList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList">ScimIntegrationDescribeOutputRunAsRoleList</a>

---

##### `SyncPassword`<sup>Required</sup> <a name="SyncPassword" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.syncPassword"></a>

```go
func SyncPassword() ScimIntegrationDescribeOutputSyncPasswordList
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList">ScimIntegrationDescribeOutputSyncPasswordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutput">ScimIntegrationDescribeOutput</a>

---


### ScimIntegrationDescribeOutputRunAsRoleList <a name="ScimIntegrationDescribeOutputRunAsRoleList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputRunAsRoleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationDescribeOutputRunAsRoleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.get"></a>

```go
func Get(index *f64) ScimIntegrationDescribeOutputRunAsRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationDescribeOutputRunAsRoleOutputReference <a name="ScimIntegrationDescribeOutputRunAsRoleOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputRunAsRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationDescribeOutputRunAsRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRole">ScimIntegrationDescribeOutputRunAsRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationDescribeOutputRunAsRole
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputRunAsRole">ScimIntegrationDescribeOutputRunAsRole</a>

---


### ScimIntegrationDescribeOutputSyncPasswordList <a name="ScimIntegrationDescribeOutputSyncPasswordList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputSyncPasswordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationDescribeOutputSyncPasswordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.get"></a>

```go
func Get(index *f64) ScimIntegrationDescribeOutputSyncPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationDescribeOutputSyncPasswordOutputReference <a name="ScimIntegrationDescribeOutputSyncPasswordOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationDescribeOutputSyncPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationDescribeOutputSyncPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPassword">ScimIntegrationDescribeOutputSyncPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationDescribeOutputSyncPassword
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationDescribeOutputSyncPassword">ScimIntegrationDescribeOutputSyncPassword</a>

---


### ScimIntegrationShowOutputList <a name="ScimIntegrationShowOutputList" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ScimIntegrationShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.get"></a>

```go
func Get(index *f64) ScimIntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ScimIntegrationShowOutputOutputReference <a name="ScimIntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/scimintegration"

scimintegration.NewScimIntegrationShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ScimIntegrationShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutput">ScimIntegrationShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ScimIntegrationShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationShowOutput">ScimIntegrationShowOutput</a>

---



