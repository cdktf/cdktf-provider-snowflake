# `apiIntegration` Submodule <a name="`apiIntegration` Submodule" id="@cdktf/provider-snowflake.apiIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegration <a name="ApiIntegration" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration snowflake_api_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiintegration"

apiintegration.NewApiIntegration(scope Construct, id *string, config ApiIntegrationConfig) ApiIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig">ApiIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig">ApiIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn">ResetApiAwsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount">ResetApiGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId">ResetAzureAdApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience">ResetGoogleAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiAwsRoleArn` <a name="ResetApiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn"></a>

```go
func ResetApiAwsRoleArn()
```

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes"></a>

```go
func ResetApiBlockedPrefixes()
```

##### `ResetApiGcpServiceAccount` <a name="ResetApiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount"></a>

```go
func ResetApiGcpServiceAccount()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetAzureAdApplicationId` <a name="ResetAzureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId"></a>

```go
func ResetAzureAdApplicationId()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetGoogleAudience` <a name="ResetGoogleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience"></a>

```go
func ResetGoogleAudience()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiintegration"

apiintegration.ApiIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiintegration"

apiintegration.ApiIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiintegration"

apiintegration.ApiIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiintegration"

apiintegration.ApiIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId">ApiAwsExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn">ApiAwsIamUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput">ApiAwsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput">ApiGcpServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput">ApiProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput">AzureAdApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput">GoogleAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount">ApiGcpServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience">GoogleAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAwsExternalId`<sup>Required</sup> <a name="ApiAwsExternalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId"></a>

```go
func ApiAwsExternalId() *string
```

- *Type:* *string

---

##### `ApiAwsIamUserArn`<sup>Required</sup> <a name="ApiAwsIamUserArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn"></a>

```go
func ApiAwsIamUserArn() *string
```

- *Type:* *string

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl"></a>

```go
func AzureConsentUrl() *string
```

- *Type:* *string

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName"></a>

```go
func AzureMultiTenantAppName() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput"></a>

```go
func ApiAllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAwsRoleArnInput`<sup>Optional</sup> <a name="ApiAwsRoleArnInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput"></a>

```go
func ApiAwsRoleArnInput() *string
```

- *Type:* *string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput"></a>

```go
func ApiBlockedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiGcpServiceAccountInput`<sup>Optional</sup> <a name="ApiGcpServiceAccountInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput"></a>

```go
func ApiGcpServiceAccountInput() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiProviderInput`<sup>Optional</sup> <a name="ApiProviderInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput"></a>

```go
func ApiProviderInput() *string
```

- *Type:* *string

---

##### `AzureAdApplicationIdInput`<sup>Optional</sup> <a name="AzureAdApplicationIdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput"></a>

```go
func AzureAdApplicationIdInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GoogleAudienceInput`<sup>Optional</sup> <a name="GoogleAudienceInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput"></a>

```go
func GoogleAudienceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes"></a>

```go
func ApiAllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAwsRoleArn`<sup>Required</sup> <a name="ApiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn"></a>

```go
func ApiAwsRoleArn() *string
```

- *Type:* *string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes"></a>

```go
func ApiBlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiGcpServiceAccount`<sup>Required</sup> <a name="ApiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount"></a>

```go
func ApiGcpServiceAccount() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `AzureAdApplicationId`<sup>Required</sup> <a name="AzureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId"></a>

```go
func AzureAdApplicationId() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience"></a>

```go
func GoogleAudience() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationConfig <a name="ApiIntegrationConfig" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiintegration"

&apiintegration.ApiIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiAllowedPrefixes: *[]*string,
	ApiProvider: *string,
	Name: *string,
	ApiAwsRoleArn: *string,
	ApiBlockedPrefixes: *[]*string,
	ApiGcpServiceAccount: *string,
	ApiKey: *string,
	AzureAdApplicationId: *string,
	AzureTenantId: *string,
	Comment: *string,
	Enabled: interface{},
	GoogleAudience: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | Specifies the HTTPS proxy service type. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the API integration. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>*string</code> | ARN of a cloud platform role. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount">ApiGcpServiceAccount</a></code> | <code>*string</code> | The service account used for communication with the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | The API key (also called a “subscription key”). |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>*string</code> | The 'Application (client) id' of the Azure AD app for your remote service. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#comment ApiIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience">GoogleAudience</a></code> | <code>*string</code> | The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#id ApiIntegration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes"></a>

```go
ApiAllowedPrefixes *[]*string
```

- *Type:* *[]*string

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider"></a>

```go
ApiProvider *string
```

- *Type:* *string

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#api_provider ApiIntegration#api_provider}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#name ApiIntegration#name}

---

##### `ApiAwsRoleArn`<sup>Optional</sup> <a name="ApiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn"></a>

```go
ApiAwsRoleArn *string
```

- *Type:* *string

ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes"></a>

```go
ApiBlockedPrefixes *[]*string
```

- *Type:* *[]*string

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `ApiGcpServiceAccount`<sup>Optional</sup> <a name="ApiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount"></a>

```go
ApiGcpServiceAccount *string
```

- *Type:* *string

The service account used for communication with the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

The API key (also called a “subscription key”).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#api_key ApiIntegration#api_key}

---

##### `AzureAdApplicationId`<sup>Optional</sup> <a name="AzureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId"></a>

```go
AzureAdApplicationId *string
```

- *Type:* *string

The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#comment ApiIntegration#comment}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#enabled ApiIntegration#enabled}

---

##### `GoogleAudience`<sup>Optional</sup> <a name="GoogleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience"></a>

```go
GoogleAudience *string
```

- *Type:* *string

The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#google_audience ApiIntegration#google_audience}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/api_integration#id ApiIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



