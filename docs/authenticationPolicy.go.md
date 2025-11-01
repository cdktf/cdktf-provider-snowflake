# `authenticationPolicy` Submodule <a name="`authenticationPolicy` Submodule" id="@cdktf/provider-snowflake.authenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationPolicy <a name="AuthenticationPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy snowflake_authentication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicy(scope Construct, id *string, config AuthenticationPolicyConfig) AuthenticationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy">PutMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy">PutPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy">PutWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods">ResetAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes">ResetClientTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods">ResetMfaAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment">ResetMfaEnrollment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy">ResetMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy">ResetPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations">ResetSecurityIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy">ResetWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMfaPolicy` <a name="PutMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy"></a>

```go
func PutMfaPolicy(value AuthenticationPolicyMfaPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `PutPatPolicy` <a name="PutPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy"></a>

```go
func PutPatPolicy(value AuthenticationPolicyPatPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value AuthenticationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `PutWorkloadIdentityPolicy` <a name="PutWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy"></a>

```go
func PutWorkloadIdentityPolicy(value AuthenticationPolicyWorkloadIdentityPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `ResetAuthenticationMethods` <a name="ResetAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods"></a>

```go
func ResetAuthenticationMethods()
```

##### `ResetClientTypes` <a name="ResetClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes"></a>

```go
func ResetClientTypes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetMfaAuthenticationMethods` <a name="ResetMfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods"></a>

```go
func ResetMfaAuthenticationMethods()
```

##### `ResetMfaEnrollment` <a name="ResetMfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment"></a>

```go
func ResetMfaEnrollment()
```

##### `ResetMfaPolicy` <a name="ResetMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy"></a>

```go
func ResetMfaPolicy()
```

##### `ResetPatPolicy` <a name="ResetPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy"></a>

```go
func ResetPatPolicy()
```

##### `ResetSecurityIntegrations` <a name="ResetSecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations"></a>

```go
func ResetSecurityIntegrations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkloadIdentityPolicy` <a name="ResetWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy"></a>

```go
func ResetWorkloadIdentityPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.AuthenticationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.AuthenticationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.AuthenticationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.AuthenticationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthenticationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy">MfaPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy">PatPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput">AuthenticationMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput">ClientTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput">MfaAuthenticationMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput">MfaEnrollmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput">MfaPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput">PatPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput">SecurityIntegrationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput">WorkloadIdentityPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods">AuthenticationMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes">ClientTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment">MfaEnrollment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations">SecurityIntegrations</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput"></a>

```go
func DescribeOutput() AuthenticationPolicyDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy"></a>

```go
func MfaPolicy() AuthenticationPolicyMfaPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a>

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy"></a>

```go
func PatPolicy() AuthenticationPolicyPatPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput"></a>

```go
func ShowOutput() AuthenticationPolicyShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts"></a>

```go
func Timeouts() AuthenticationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a>

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy"></a>

```go
func WorkloadIdentityPolicy() AuthenticationPolicyWorkloadIdentityPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a>

---

##### `AuthenticationMethodsInput`<sup>Optional</sup> <a name="AuthenticationMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput"></a>

```go
func AuthenticationMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientTypesInput`<sup>Optional</sup> <a name="ClientTypesInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput"></a>

```go
func ClientTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MfaAuthenticationMethodsInput`<sup>Optional</sup> <a name="MfaAuthenticationMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput"></a>

```go
func MfaAuthenticationMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MfaEnrollmentInput`<sup>Optional</sup> <a name="MfaEnrollmentInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput"></a>

```go
func MfaEnrollmentInput() *string
```

- *Type:* *string

---

##### `MfaPolicyInput`<sup>Optional</sup> <a name="MfaPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput"></a>

```go
func MfaPolicyInput() AuthenticationPolicyMfaPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatPolicyInput`<sup>Optional</sup> <a name="PatPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput"></a>

```go
func PatPolicyInput() AuthenticationPolicyPatPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SecurityIntegrationsInput`<sup>Optional</sup> <a name="SecurityIntegrationsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput"></a>

```go
func SecurityIntegrationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdentityPolicyInput`<sup>Optional</sup> <a name="WorkloadIdentityPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput"></a>

```go
func WorkloadIdentityPolicyInput() AuthenticationPolicyWorkloadIdentityPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods"></a>

```go
func AuthenticationMethods() *[]*string
```

- *Type:* *[]*string

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes"></a>

```go
func ClientTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MfaAuthenticationMethods`<sup>Required</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods"></a>

```go
func MfaAuthenticationMethods() *[]*string
```

- *Type:* *[]*string

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment"></a>

```go
func MfaEnrollment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations"></a>

```go
func SecurityIntegrations() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationPolicyConfig <a name="AuthenticationPolicyConfig" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyConfig {
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
	AuthenticationMethods: *[]*string,
	ClientTypes: *[]*string,
	Comment: *string,
	Id: *string,
	MfaAuthenticationMethods: *[]*string,
	MfaEnrollment: *string,
	MfaPolicy: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.authenticationPolicy.AuthenticationPolicyMfaPolicy,
	PatPolicy: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.authenticationPolicy.AuthenticationPolicyPatPolicy,
	SecurityIntegrations: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.authenticationPolicy.AuthenticationPolicyTimeouts,
	WorkloadIdentityPolicy: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods">AuthenticationMethods</a></code> | <code>*[]*string</code> | A list of authentication methods that are allowed during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes">ClientTypes</a></code> | <code>*[]*string</code> | A list of clients that can authenticate with Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>*[]*string</code> | A list of authentication methods that enforce multi-factor authentication (MFA) during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment">MfaEnrollment</a></code> | <code>*string</code> | Determines whether a user must enroll in multi-factor authentication. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy">MfaPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | mfa_policy block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy">PatPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | pat_policy block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations">SecurityIntegrations</a></code> | <code>*[]*string</code> | A list of security integrations the authentication policy is associated with. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | workload_identity_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#database AuthenticationPolicy#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#name AuthenticationPolicy#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}

---

##### `AuthenticationMethods`<sup>Optional</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods"></a>

```go
AuthenticationMethods *[]*string
```

- *Type:* *[]*string

A list of authentication methods that are allowed during login.

Valid values are (case-insensitive): `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR` | `PROGRAMMATIC_ACCESS_TOKEN` | `WORKLOAD_IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}

---

##### `ClientTypes`<sup>Optional</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes"></a>

```go
ClientTypes *[]*string
```

- *Type:* *[]*string

A list of clients that can authenticate with Snowflake.

If a client tries to connect, and the client is not one of the valid `client_types`, then the login attempt fails. Valid values are (case-insensitive): `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL` | `SNOWFLAKE_CLI`. The `client_types` property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MfaAuthenticationMethods`<sup>Optional</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods"></a>

```go
MfaAuthenticationMethods *[]*string
```

- *Type:* *[]*string

A list of authentication methods that enforce multi-factor authentication (MFA) during login.

Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}

---

##### `MfaEnrollment`<sup>Optional</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment"></a>

```go
MfaEnrollment *string
```

- *Type:* *string

Determines whether a user must enroll in multi-factor authentication.

Valid values are (case-insensitive): `REQUIRED` | `REQUIRED_PASSWORD_ONLY` | `OPTIONAL`. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the `client_types` parameter must include `snowflake_ui`, because Snowsight is the only place users can enroll in multi-factor authentication (MFA).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}

---

##### `MfaPolicy`<sup>Optional</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy"></a>

```go
MfaPolicy AuthenticationPolicyMfaPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

mfa_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#mfa_policy AuthenticationPolicy#mfa_policy}

---

##### `PatPolicy`<sup>Optional</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy"></a>

```go
PatPolicy AuthenticationPolicyPatPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

pat_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#pat_policy AuthenticationPolicy#pat_policy}

---

##### `SecurityIntegrations`<sup>Optional</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations"></a>

```go
SecurityIntegrations *[]*string
```

- *Type:* *[]*string

A list of security integrations the authentication policy is associated with.

This parameter has no effect when `saml` or `oauth` are not in the `authentication_methods` list. All values in the `security_integrations` list must be compatible with the values in the `authentication_methods` list. For example, if `security_integrations` contains a SAML security integration, and `authentication_methods` contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use `ALL` as parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts"></a>

```go
Timeouts AuthenticationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#timeouts AuthenticationPolicy#timeouts}

---

##### `WorkloadIdentityPolicy`<sup>Optional</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy"></a>

```go
WorkloadIdentityPolicy AuthenticationPolicyWorkloadIdentityPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

workload_identity_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#workload_identity_policy AuthenticationPolicy#workload_identity_policy}

---

### AuthenticationPolicyDescribeOutput <a name="AuthenticationPolicyDescribeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyDescribeOutput {

}
```


### AuthenticationPolicyMfaPolicy <a name="AuthenticationPolicyMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyMfaPolicy {
	AllowedMethods: *[]*string,
	EnforceMfaOnExternalAuthentication: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Specifies the allowed methods for the MFA policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication">EnforceMfaOnExternalAuthentication</a></code> | <code>*string</code> | Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` \| `NONE`. |

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Specifies the allowed methods for the MFA policy.

Valid values are: `ALL` | `PASSKEY` | `TOTP` | `DUO`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_methods AuthenticationPolicy#allowed_methods}

---

##### `EnforceMfaOnExternalAuthentication`<sup>Optional</sup> <a name="EnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication"></a>

```go
EnforceMfaOnExternalAuthentication *string
```

- *Type:* *string

Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#enforce_mfa_on_external_authentication AuthenticationPolicy#enforce_mfa_on_external_authentication}

---

### AuthenticationPolicyPatPolicy <a name="AuthenticationPolicyPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyPatPolicy {
	DefaultExpiryInDays: *f64,
	MaxExpiryInDays: *f64,
	NetworkPolicyEvaluation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays">DefaultExpiryInDays</a></code> | <code>*f64</code> | Specifies the default expiration time (in days) for a programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays">MaxExpiryInDays</a></code> | <code>*f64</code> | Specifies the maximum number of days that can be set for the expiration time for a programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation">NetworkPolicyEvaluation</a></code> | <code>*string</code> | Specifies the network policy evaluation for the PAT. |

---

##### `DefaultExpiryInDays`<sup>Optional</sup> <a name="DefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays"></a>

```go
DefaultExpiryInDays *f64
```

- *Type:* *f64

Specifies the default expiration time (in days) for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#default_expiry_in_days AuthenticationPolicy#default_expiry_in_days}

---

##### `MaxExpiryInDays`<sup>Optional</sup> <a name="MaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays"></a>

```go
MaxExpiryInDays *f64
```

- *Type:* *f64

Specifies the maximum number of days that can be set for the expiration time for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#max_expiry_in_days AuthenticationPolicy#max_expiry_in_days}

---

##### `NetworkPolicyEvaluation`<sup>Optional</sup> <a name="NetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation"></a>

```go
NetworkPolicyEvaluation *string
```

- *Type:* *string

Specifies the network policy evaluation for the PAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#network_policy_evaluation AuthenticationPolicy#network_policy_evaluation}

---

### AuthenticationPolicyShowOutput <a name="AuthenticationPolicyShowOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyShowOutput {

}
```


### AuthenticationPolicyTimeouts <a name="AuthenticationPolicyTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#create AuthenticationPolicy#create}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#read AuthenticationPolicy#read}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#update AuthenticationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#create AuthenticationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#read AuthenticationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#update AuthenticationPolicy#update}.

---

### AuthenticationPolicyWorkloadIdentityPolicy <a name="AuthenticationPolicyWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

&authenticationpolicy.AuthenticationPolicyWorkloadIdentityPolicy {
	AllowedAwsAccounts: *[]*string,
	AllowedAzureIssuers: *[]*string,
	AllowedOidcIssuers: *[]*string,
	AllowedProviders: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts">AllowedAwsAccounts</a></code> | <code>*[]*string</code> | Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers">AllowedAzureIssuers</a></code> | <code>*[]*string</code> | Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers">AllowedOidcIssuers</a></code> | <code>*[]*string</code> | Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders">AllowedProviders</a></code> | <code>*[]*string</code> | Specifies the allowed providers for the workload identity policy. |

---

##### `AllowedAwsAccounts`<sup>Optional</sup> <a name="AllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts"></a>

```go
AllowedAwsAccounts *[]*string
```

- *Type:* *[]*string

Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_aws_accounts AuthenticationPolicy#allowed_aws_accounts}

---

##### `AllowedAzureIssuers`<sup>Optional</sup> <a name="AllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers"></a>

```go
AllowedAzureIssuers *[]*string
```

- *Type:* *[]*string

Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_azure_issuers AuthenticationPolicy#allowed_azure_issuers}

---

##### `AllowedOidcIssuers`<sup>Optional</sup> <a name="AllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers"></a>

```go
AllowedOidcIssuers *[]*string
```

- *Type:* *[]*string

Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_oidc_issuers AuthenticationPolicy#allowed_oidc_issuers}

---

##### `AllowedProviders`<sup>Optional</sup> <a name="AllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders"></a>

```go
AllowedProviders *[]*string
```

- *Type:* *[]*string

Specifies the allowed providers for the workload identity policy.

Valid values are: `ALL` | `AWS` | `AZURE` | `GCP` | `OIDC`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_providers AuthenticationPolicy#allowed_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationPolicyDescribeOutputList <a name="AuthenticationPolicyDescribeOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuthenticationPolicyDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get"></a>

```go
func Get(index *f64) AuthenticationPolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AuthenticationPolicyDescribeOutputOutputReference <a name="AuthenticationPolicyDescribeOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuthenticationPolicyDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods">AuthenticationMethods</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes">ClientTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment">MfaEnrollment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy">MfaPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy">PatPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations">SecurityIntegrations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods"></a>

```go
func AuthenticationMethods() *string
```

- *Type:* *string

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes"></a>

```go
func ClientTypes() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `MfaAuthenticationMethods`<sup>Required</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods"></a>

```go
func MfaAuthenticationMethods() *string
```

- *Type:* *string

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment"></a>

```go
func MfaEnrollment() *string
```

- *Type:* *string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy"></a>

```go
func MfaPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy"></a>

```go
func PatPolicy() *string
```

- *Type:* *string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations"></a>

```go
func SecurityIntegrations() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy"></a>

```go
func WorkloadIdentityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() AuthenticationPolicyDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a>

---


### AuthenticationPolicyMfaPolicyOutputReference <a name="AuthenticationPolicyMfaPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyMfaPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AuthenticationPolicyMfaPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication">ResetEnforceMfaOnExternalAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods"></a>

```go
func ResetAllowedMethods()
```

##### `ResetEnforceMfaOnExternalAuthentication` <a name="ResetEnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication"></a>

```go
func ResetEnforceMfaOnExternalAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput">EnforceMfaOnExternalAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication">EnforceMfaOnExternalAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnforceMfaOnExternalAuthenticationInput`<sup>Optional</sup> <a name="EnforceMfaOnExternalAuthenticationInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput"></a>

```go
func EnforceMfaOnExternalAuthenticationInput() *string
```

- *Type:* *string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `EnforceMfaOnExternalAuthentication`<sup>Required</sup> <a name="EnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication"></a>

```go
func EnforceMfaOnExternalAuthentication() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AuthenticationPolicyMfaPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---


### AuthenticationPolicyPatPolicyOutputReference <a name="AuthenticationPolicyPatPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyPatPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AuthenticationPolicyPatPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays">ResetDefaultExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays">ResetMaxExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation">ResetNetworkPolicyEvaluation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultExpiryInDays` <a name="ResetDefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays"></a>

```go
func ResetDefaultExpiryInDays()
```

##### `ResetMaxExpiryInDays` <a name="ResetMaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays"></a>

```go
func ResetMaxExpiryInDays()
```

##### `ResetNetworkPolicyEvaluation` <a name="ResetNetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation"></a>

```go
func ResetNetworkPolicyEvaluation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput">DefaultExpiryInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput">MaxExpiryInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput">NetworkPolicyEvaluationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays">DefaultExpiryInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays">MaxExpiryInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation">NetworkPolicyEvaluation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultExpiryInDaysInput`<sup>Optional</sup> <a name="DefaultExpiryInDaysInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput"></a>

```go
func DefaultExpiryInDaysInput() *f64
```

- *Type:* *f64

---

##### `MaxExpiryInDaysInput`<sup>Optional</sup> <a name="MaxExpiryInDaysInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput"></a>

```go
func MaxExpiryInDaysInput() *f64
```

- *Type:* *f64

---

##### `NetworkPolicyEvaluationInput`<sup>Optional</sup> <a name="NetworkPolicyEvaluationInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput"></a>

```go
func NetworkPolicyEvaluationInput() *string
```

- *Type:* *string

---

##### `DefaultExpiryInDays`<sup>Required</sup> <a name="DefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays"></a>

```go
func DefaultExpiryInDays() *f64
```

- *Type:* *f64

---

##### `MaxExpiryInDays`<sup>Required</sup> <a name="MaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays"></a>

```go
func MaxExpiryInDays() *f64
```

- *Type:* *f64

---

##### `NetworkPolicyEvaluation`<sup>Required</sup> <a name="NetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation"></a>

```go
func NetworkPolicyEvaluation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AuthenticationPolicyPatPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---


### AuthenticationPolicyShowOutputList <a name="AuthenticationPolicyShowOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuthenticationPolicyShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get"></a>

```go
func Get(index *f64) AuthenticationPolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AuthenticationPolicyShowOutputOutputReference <a name="AuthenticationPolicyShowOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuthenticationPolicyShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() AuthenticationPolicyShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a>

---


### AuthenticationPolicyTimeoutsOutputReference <a name="AuthenticationPolicyTimeoutsOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AuthenticationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuthenticationPolicyWorkloadIdentityPolicyOutputReference <a name="AuthenticationPolicyWorkloadIdentityPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/authenticationpolicy"

authenticationpolicy.NewAuthenticationPolicyWorkloadIdentityPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AuthenticationPolicyWorkloadIdentityPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts">ResetAllowedAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers">ResetAllowedAzureIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers">ResetAllowedOidcIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders">ResetAllowedProviders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAwsAccounts` <a name="ResetAllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts"></a>

```go
func ResetAllowedAwsAccounts()
```

##### `ResetAllowedAzureIssuers` <a name="ResetAllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers"></a>

```go
func ResetAllowedAzureIssuers()
```

##### `ResetAllowedOidcIssuers` <a name="ResetAllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers"></a>

```go
func ResetAllowedOidcIssuers()
```

##### `ResetAllowedProviders` <a name="ResetAllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders"></a>

```go
func ResetAllowedProviders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput">AllowedAwsAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput">AllowedAzureIssuersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput">AllowedOidcIssuersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput">AllowedProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts">AllowedAwsAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers">AllowedAzureIssuers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers">AllowedOidcIssuers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders">AllowedProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAwsAccountsInput`<sup>Optional</sup> <a name="AllowedAwsAccountsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput"></a>

```go
func AllowedAwsAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAzureIssuersInput`<sup>Optional</sup> <a name="AllowedAzureIssuersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput"></a>

```go
func AllowedAzureIssuersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOidcIssuersInput`<sup>Optional</sup> <a name="AllowedOidcIssuersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput"></a>

```go
func AllowedOidcIssuersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedProvidersInput`<sup>Optional</sup> <a name="AllowedProvidersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput"></a>

```go
func AllowedProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAwsAccounts`<sup>Required</sup> <a name="AllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts"></a>

```go
func AllowedAwsAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAzureIssuers`<sup>Required</sup> <a name="AllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers"></a>

```go
func AllowedAzureIssuers() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOidcIssuers`<sup>Required</sup> <a name="AllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers"></a>

```go
func AllowedOidcIssuers() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedProviders`<sup>Required</sup> <a name="AllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders"></a>

```go
func AllowedProviders() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AuthenticationPolicyWorkloadIdentityPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---



