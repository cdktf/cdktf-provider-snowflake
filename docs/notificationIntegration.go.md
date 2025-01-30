# `notificationIntegration` Submodule <a name="`notificationIntegration` Submodule" id="@cdktf/provider-snowflake.notificationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationIntegration <a name="NotificationIntegration" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration snowflake_notification_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/notificationintegration"

notificationintegration.NewNotificationIntegration(scope Construct, id *string, config NotificationIntegrationConfig) NotificationIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig">NotificationIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig">NotificationIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn">ResetAwsSnsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn">ResetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn">ResetAwsSqsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn">ResetAwsSqsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri">ResetAzureStorageQueuePrimaryUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName">ResetGcpPubsubSubscriptionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubTopicName">ResetGcpPubsubTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAwsSnsRoleArn` <a name="ResetAwsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn"></a>

```go
func ResetAwsSnsRoleArn()
```

##### `ResetAwsSnsTopicArn` <a name="ResetAwsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn"></a>

```go
func ResetAwsSnsTopicArn()
```

##### `ResetAwsSqsArn` <a name="ResetAwsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn"></a>

```go
func ResetAwsSqsArn()
```

##### `ResetAwsSqsRoleArn` <a name="ResetAwsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn"></a>

```go
func ResetAwsSqsRoleArn()
```

##### `ResetAzureStorageQueuePrimaryUri` <a name="ResetAzureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri"></a>

```go
func ResetAzureStorageQueuePrimaryUri()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetGcpPubsubSubscriptionName` <a name="ResetGcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName"></a>

```go
func ResetGcpPubsubSubscriptionName()
```

##### `ResetGcpPubsubTopicName` <a name="ResetGcpPubsubTopicName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubTopicName"></a>

```go
func ResetGcpPubsubTopicName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/notificationintegration"

notificationintegration.NotificationIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/notificationintegration"

notificationintegration.NotificationIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/notificationintegration"

notificationintegration.NotificationIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/notificationintegration"

notificationintegration.NotificationIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NotificationIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId">AwsSnsExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn">AwsSnsIamUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId">AwsSqsExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn">AwsSqsIamUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount">GcpPubsubServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput">AwsSnsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput">AwsSnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput">AwsSqsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput">AwsSqsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput">AzureStorageQueuePrimaryUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput">GcpPubsubSubscriptionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicNameInput">GcpPubsubTopicNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput">NotificationProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn">AwsSnsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn">AwsSqsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn">AwsSqsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri">AzureStorageQueuePrimaryUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName">GcpPubsubSubscriptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicName">GcpPubsubTopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider">NotificationProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsSnsExternalId`<sup>Required</sup> <a name="AwsSnsExternalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId"></a>

```go
func AwsSnsExternalId() *string
```

- *Type:* *string

---

##### `AwsSnsIamUserArn`<sup>Required</sup> <a name="AwsSnsIamUserArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn"></a>

```go
func AwsSnsIamUserArn() *string
```

- *Type:* *string

---

##### `AwsSqsExternalId`<sup>Required</sup> <a name="AwsSqsExternalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId"></a>

```go
func AwsSqsExternalId() *string
```

- *Type:* *string

---

##### `AwsSqsIamUserArn`<sup>Required</sup> <a name="AwsSqsIamUserArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn"></a>

```go
func AwsSqsIamUserArn() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `GcpPubsubServiceAccount`<sup>Required</sup> <a name="GcpPubsubServiceAccount" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount"></a>

```go
func GcpPubsubServiceAccount() *string
```

- *Type:* *string

---

##### `AwsSnsRoleArnInput`<sup>Optional</sup> <a name="AwsSnsRoleArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput"></a>

```go
func AwsSnsRoleArnInput() *string
```

- *Type:* *string

---

##### `AwsSnsTopicArnInput`<sup>Optional</sup> <a name="AwsSnsTopicArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput"></a>

```go
func AwsSnsTopicArnInput() *string
```

- *Type:* *string

---

##### `AwsSqsArnInput`<sup>Optional</sup> <a name="AwsSqsArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput"></a>

```go
func AwsSqsArnInput() *string
```

- *Type:* *string

---

##### `AwsSqsRoleArnInput`<sup>Optional</sup> <a name="AwsSqsRoleArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput"></a>

```go
func AwsSqsRoleArnInput() *string
```

- *Type:* *string

---

##### `AzureStorageQueuePrimaryUriInput`<sup>Optional</sup> <a name="AzureStorageQueuePrimaryUriInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput"></a>

```go
func AzureStorageQueuePrimaryUriInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GcpPubsubSubscriptionNameInput`<sup>Optional</sup> <a name="GcpPubsubSubscriptionNameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput"></a>

```go
func GcpPubsubSubscriptionNameInput() *string
```

- *Type:* *string

---

##### `GcpPubsubTopicNameInput`<sup>Optional</sup> <a name="GcpPubsubTopicNameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicNameInput"></a>

```go
func GcpPubsubTopicNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationProviderInput`<sup>Optional</sup> <a name="NotificationProviderInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput"></a>

```go
func NotificationProviderInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AwsSnsRoleArn`<sup>Required</sup> <a name="AwsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn"></a>

```go
func AwsSnsRoleArn() *string
```

- *Type:* *string

---

##### `AwsSnsTopicArn`<sup>Required</sup> <a name="AwsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn"></a>

```go
func AwsSnsTopicArn() *string
```

- *Type:* *string

---

##### `AwsSqsArn`<sup>Required</sup> <a name="AwsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn"></a>

```go
func AwsSqsArn() *string
```

- *Type:* *string

---

##### `AwsSqsRoleArn`<sup>Required</sup> <a name="AwsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn"></a>

```go
func AwsSqsRoleArn() *string
```

- *Type:* *string

---

##### `AzureStorageQueuePrimaryUri`<sup>Required</sup> <a name="AzureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri"></a>

```go
func AzureStorageQueuePrimaryUri() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GcpPubsubSubscriptionName`<sup>Required</sup> <a name="GcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName"></a>

```go
func GcpPubsubSubscriptionName() *string
```

- *Type:* *string

---

##### `GcpPubsubTopicName`<sup>Required</sup> <a name="GcpPubsubTopicName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicName"></a>

```go
func GcpPubsubTopicName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationProvider`<sup>Required</sup> <a name="NotificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider"></a>

```go
func NotificationProvider() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationIntegrationConfig <a name="NotificationIntegrationConfig" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/notificationintegration"

&notificationintegration.NotificationIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NotificationProvider: *string,
	AwsSnsRoleArn: *string,
	AwsSnsTopicArn: *string,
	AwsSqsArn: *string,
	AwsSqsRoleArn: *string,
	AzureStorageQueuePrimaryUri: *string,
	AzureTenantId: *string,
	Comment: *string,
	Direction: *string,
	Enabled: interface{},
	GcpPubsubSubscriptionName: *string,
	GcpPubsubTopicName: *string,
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#name NotificationIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider">NotificationProvider</a></code> | <code>*string</code> | The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB; |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn">AwsSnsRoleArn</a></code> | <code>*string</code> | AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn">AwsSqsArn</a></code> | <code>*string</code> | AWS SQS queue ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn">AwsSqsRoleArn</a></code> | <code>*string</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri">AzureStorageQueuePrimaryUri</a></code> | <code>*string</code> | The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | A comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction of the cloud messaging with respect to Snowflake (required only for error notifications). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#enabled NotificationIntegration#enabled}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName">GcpPubsubSubscriptionName</a></code> | <code>*string</code> | The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubTopicName">GcpPubsubTopicName</a></code> | <code>*string</code> | The topic id that Snowflake will use to push notifications. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#id NotificationIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | A type of integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#name NotificationIntegration#name}.

---

##### `NotificationProvider`<sup>Required</sup> <a name="NotificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider"></a>

```go
NotificationProvider *string
```

- *Type:* *string

The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB;

AWS_SQS is deprecated and will be removed in the future provider versions)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#notification_provider NotificationIntegration#notification_provider}

---

##### `AwsSnsRoleArn`<sup>Optional</sup> <a name="AwsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn"></a>

```go
AwsSnsRoleArn *string
```

- *Type:* *string

AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}

---

##### `AwsSnsTopicArn`<sup>Optional</sup> <a name="AwsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn"></a>

```go
AwsSnsTopicArn *string
```

- *Type:* *string

AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}

---

##### `AwsSqsArn`<sup>Optional</sup> <a name="AwsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn"></a>

```go
AwsSqsArn *string
```

- *Type:* *string

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `AwsSqsRoleArn`<sup>Optional</sup> <a name="AwsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn"></a>

```go
AwsSqsRoleArn *string
```

- *Type:* *string

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `AzureStorageQueuePrimaryUri`<sup>Optional</sup> <a name="AzureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri"></a>

```go
AzureStorageQueuePrimaryUri *string
```

- *Type:* *string

The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

A comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#comment NotificationIntegration#comment}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#direction NotificationIntegration#direction}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#enabled NotificationIntegration#enabled}.

---

##### `GcpPubsubSubscriptionName`<sup>Optional</sup> <a name="GcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName"></a>

```go
GcpPubsubSubscriptionName *string
```

- *Type:* *string

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `GcpPubsubTopicName`<sup>Optional</sup> <a name="GcpPubsubTopicName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubTopicName"></a>

```go
GcpPubsubTopicName *string
```

- *Type:* *string

The topic id that Snowflake will use to push notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#gcp_pubsub_topic_name NotificationIntegration#gcp_pubsub_topic_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#id NotificationIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

A type of integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/notification_integration#type NotificationIntegration#type}

---



