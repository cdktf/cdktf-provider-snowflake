# `apiAuthenticationIntegrationWithClientCredentials` Submodule <a name="`apiAuthenticationIntegrationWithClientCredentials` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithClientCredentials <a name="ApiAuthenticationIntegrationWithClientCredentials" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials snowflake_api_authentication_integration_with_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentials(scope Construct, id *string, config ApiAuthenticationIntegrationWithClientCredentialsConfig) ApiAuthenticationIntegrationWithClientCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig">ApiAuthenticationIntegrationWithClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig">ApiAuthenticationIntegrationWithClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAccessTokenValidity">ResetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAllowedScopes">ResetOauthAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthClientAuthMethod">ResetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthTokenEndpoint">ResetOauthTokenEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetOauthAccessTokenValidity` <a name="ResetOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAccessTokenValidity"></a>

```go
func ResetOauthAccessTokenValidity()
```

##### `ResetOauthAllowedScopes` <a name="ResetOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAllowedScopes"></a>

```go
func ResetOauthAllowedScopes()
```

##### `ResetOauthClientAuthMethod` <a name="ResetOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthClientAuthMethod"></a>

```go
func ResetOauthClientAuthMethod()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthRefreshTokenValidity"></a>

```go
func ResetOauthRefreshTokenValidity()
```

##### `ResetOauthTokenEndpoint` <a name="ResetOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthTokenEndpoint"></a>

```go
func ResetOauthTokenEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentials_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiAuthenticationIntegrationWithClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiAuthenticationIntegrationWithClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList">ApiAuthenticationIntegrationWithClientCredentialsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidityInput">OauthAccessTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopesInput">OauthAllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethodInput">OauthClientAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpointInput">OauthTokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.describeOutput"></a>

```go
func DescribeOutput() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.showOutput"></a>

```go
func ShowOutput() ApiAuthenticationIntegrationWithClientCredentialsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList">ApiAuthenticationIntegrationWithClientCredentialsShowOutputList</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthAccessTokenValidityInput`<sup>Optional</sup> <a name="OauthAccessTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidityInput"></a>

```go
func OauthAccessTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `OauthAllowedScopesInput`<sup>Optional</sup> <a name="OauthAllowedScopesInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopesInput"></a>

```go
func OauthAllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientAuthMethodInput`<sup>Optional</sup> <a name="OauthClientAuthMethodInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethodInput"></a>

```go
func OauthClientAuthMethodInput() *string
```

- *Type:* *string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecretInput"></a>

```go
func OauthClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidityInput"></a>

```go
func OauthRefreshTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `OauthTokenEndpointInput`<sup>Optional</sup> <a name="OauthTokenEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpointInput"></a>

```go
func OauthTokenEndpointInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidity"></a>

```go
func OauthAccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethod"></a>

```go
func OauthClientAuthMethod() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecret"></a>

```go
func OauthClientSecret() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidity"></a>

```go
func OauthRefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpoint"></a>

```go
func OauthTokenEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithClientCredentialsConfig <a name="ApiAuthenticationIntegrationWithClientCredentialsConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	Comment: *string,
	Id: *string,
	OauthAccessTokenValidity: *f64,
	OauthAllowedScopes: *[]*string,
	OauthClientAuthMethod: *string,
	OauthRefreshTokenValidity: *f64,
	OauthTokenEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `(`, `)`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>*f64</code> | Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>*string</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>*string</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#enabled ApiAuthenticationIntegrationWithClientCredentials#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#name ApiAuthenticationIntegrationWithClientCredentials#name}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_id ApiAuthenticationIntegrationWithClientCredentials#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_secret ApiAuthenticationIntegrationWithClientCredentials#oauth_client_secret}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#comment ApiAuthenticationIntegrationWithClientCredentials#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthAccessTokenValidity`<sup>Optional</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAccessTokenValidity"></a>

```go
OauthAccessTokenValidity *f64
```

- *Type:* *f64

Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_access_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_access_token_validity}

---

##### `OauthAllowedScopes`<sup>Optional</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAllowedScopes"></a>

```go
OauthAllowedScopes *[]*string
```

- *Type:* *[]*string

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_allowed_scopes ApiAuthenticationIntegrationWithClientCredentials#oauth_allowed_scopes}

---

##### `OauthClientAuthMethod`<sup>Optional</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientAuthMethod"></a>

```go
OauthClientAuthMethod *string
```

- *Type:* *string

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_auth_method ApiAuthenticationIntegrationWithClientCredentials#oauth_client_auth_method}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthRefreshTokenValidity"></a>

```go
OauthRefreshTokenValidity *f64
```

- *Type:* *f64

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_refresh_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_refresh_token_validity}

---

##### `OauthTokenEndpoint`<sup>Optional</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthTokenEndpoint"></a>

```go
OauthTokenEndpoint *string
```

- *Type:* *string

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_token_endpoint ApiAuthenticationIntegrationWithClientCredentials#oauth_token_endpoint}

---

### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration {

}
```


### ApiAuthenticationIntegrationWithClientCredentialsShowOutput <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

&apiauthenticationintegrationwithclientcredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientId</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.authType">AuthType</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientId">OauthClientId</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthGrant">OauthGrant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.parentIntegration">ParentIntegration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.authType"></a>

```go
func AuthType() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList</a>

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```go
func OauthAccessTokenValidity() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList</a>

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList</a>

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```go
func OauthAuthorizationEndpoint() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```go
func OauthClientAuthMethod() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList</a>

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientIdList</a>

---

##### `OauthGrant`<sup>Required</sup> <a name="OauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthGrant"></a>

```go
func OauthGrant() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList</a>

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```go
func OauthRefreshTokenValidity() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```go
func OauthTokenEndpoint() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList</a>

---

##### `ParentIntegration`<sup>Required</sup> <a name="ParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.parentIntegration"></a>

```go
func ParentIntegration() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsShowOutputList <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiAuthenticationIntegrationWithClientCredentialsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get"></a>

```go
func Get(index *f64) ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v11/apiauthenticationintegrationwithclientcredentials"

apiauthenticationintegrationwithclientcredentials.NewApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput">ApiAuthenticationIntegrationWithClientCredentialsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiAuthenticationIntegrationWithClientCredentialsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput">ApiAuthenticationIntegrationWithClientCredentialsShowOutput</a>

---



