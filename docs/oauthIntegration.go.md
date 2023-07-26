# `snowflake_oauth_integration`

Refer to the Terraform Registory for docs: [`snowflake_oauth_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration).

# `oauthIntegration` Submodule <a name="`oauthIntegration` Submodule" id="@cdktf/provider-snowflake.oauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthIntegration <a name="OauthIntegration" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration snowflake_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/oauthintegration"

oauthintegration.NewOauthIntegration(scope Construct, id *string, config OauthIntegrationConfig) OauthIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig">OauthIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig">OauthIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetBlockedRolesList">ResetBlockedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthClientType">ResetOauthClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthIssueRefreshTokens">ResetOauthIssueRefreshTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRedirectUri">ResetOauthRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthUseSecondaryRoles">ResetOauthUseSecondaryRoles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBlockedRolesList` <a name="ResetBlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetBlockedRolesList"></a>

```go
func ResetBlockedRolesList()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetOauthClientType` <a name="ResetOauthClientType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthClientType"></a>

```go
func ResetOauthClientType()
```

##### `ResetOauthIssueRefreshTokens` <a name="ResetOauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthIssueRefreshTokens"></a>

```go
func ResetOauthIssueRefreshTokens()
```

##### `ResetOauthRedirectUri` <a name="ResetOauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRedirectUri"></a>

```go
func ResetOauthRedirectUri()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRefreshTokenValidity"></a>

```go
func ResetOauthRefreshTokenValidity()
```

##### `ResetOauthUseSecondaryRoles` <a name="ResetOauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthUseSecondaryRoles"></a>

```go
func ResetOauthUseSecondaryRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/oauthintegration"

oauthintegration.OauthIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/oauthintegration"

oauthintegration.OauthIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/oauthintegration"

oauthintegration.OauthIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesListInput">BlockedRolesListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientInput">OauthClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientTypeInput">OauthClientTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokensInput">OauthIssueRefreshTokensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUriInput">OauthRedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRolesInput">OauthUseSecondaryRolesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesList">BlockedRolesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClient">OauthClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientType">OauthClientType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokens">OauthIssueRefreshTokens</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUri">OauthRedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRoles">OauthUseSecondaryRoles</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `BlockedRolesListInput`<sup>Optional</sup> <a name="BlockedRolesListInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesListInput"></a>

```go
func BlockedRolesListInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthClientInput`<sup>Optional</sup> <a name="OauthClientInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientInput"></a>

```go
func OauthClientInput() *string
```

- *Type:* *string

---

##### `OauthClientTypeInput`<sup>Optional</sup> <a name="OauthClientTypeInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientTypeInput"></a>

```go
func OauthClientTypeInput() *string
```

- *Type:* *string

---

##### `OauthIssueRefreshTokensInput`<sup>Optional</sup> <a name="OauthIssueRefreshTokensInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokensInput"></a>

```go
func OauthIssueRefreshTokensInput() interface{}
```

- *Type:* interface{}

---

##### `OauthRedirectUriInput`<sup>Optional</sup> <a name="OauthRedirectUriInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUriInput"></a>

```go
func OauthRedirectUriInput() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidityInput"></a>

```go
func OauthRefreshTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `OauthUseSecondaryRolesInput`<sup>Optional</sup> <a name="OauthUseSecondaryRolesInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRolesInput"></a>

```go
func OauthUseSecondaryRolesInput() *string
```

- *Type:* *string

---

##### `BlockedRolesList`<sup>Required</sup> <a name="BlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesList"></a>

```go
func BlockedRolesList() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthClient`<sup>Required</sup> <a name="OauthClient" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClient"></a>

```go
func OauthClient() *string
```

- *Type:* *string

---

##### `OauthClientType`<sup>Required</sup> <a name="OauthClientType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientType"></a>

```go
func OauthClientType() *string
```

- *Type:* *string

---

##### `OauthIssueRefreshTokens`<sup>Required</sup> <a name="OauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokens"></a>

```go
func OauthIssueRefreshTokens() interface{}
```

- *Type:* interface{}

---

##### `OauthRedirectUri`<sup>Required</sup> <a name="OauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUri"></a>

```go
func OauthRedirectUri() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidity"></a>

```go
func OauthRefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthUseSecondaryRoles`<sup>Required</sup> <a name="OauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRoles"></a>

```go
func OauthUseSecondaryRoles() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthIntegrationConfig <a name="OauthIntegrationConfig" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/oauthintegration"

&oauthintegration.OauthIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OauthClient: *string,
	BlockedRolesList: *[]*string,
	Comment: *string,
	Enabled: interface{},
	Id: *string,
	OauthClientType: *string,
	OauthIssueRefreshTokens: interface{},
	OauthRedirectUri: *string,
	OauthRefreshTokenValidity: *f64,
	OauthUseSecondaryRoles: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClient">OauthClient</a></code> | <code>*string</code> | Specifies the OAuth client type. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.blockedRolesList">BlockedRolesList</a></code> | <code>*[]*string</code> | List of roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#id OauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClientType">OauthClientType</a></code> | <code>*string</code> | Specifies the type of client being registered. Snowflake supports both confidential and public clients. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthIssueRefreshTokens">OauthIssueRefreshTokens</a></code> | <code>interface{}</code> | Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRedirectUri">OauthRedirectUri</a></code> | <code>*string</code> | Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthUseSecondaryRoles">OauthUseSecondaryRoles</a></code> | <code>*string</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#name OauthIntegration#name}

---

##### `OauthClient`<sup>Required</sup> <a name="OauthClient" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClient"></a>

```go
OauthClient *string
```

- *Type:* *string

Specifies the OAuth client type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#oauth_client OauthIntegration#oauth_client}

---

##### `BlockedRolesList`<sup>Optional</sup> <a name="BlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.blockedRolesList"></a>

```go
BlockedRolesList *[]*string
```

- *Type:* *[]*string

List of roles that a user cannot explicitly consent to using after authenticating.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#blocked_roles_list OauthIntegration#blocked_roles_list}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#comment OauthIntegration#comment}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this OAuth integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#enabled OauthIntegration#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#id OauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthClientType`<sup>Optional</sup> <a name="OauthClientType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClientType"></a>

```go
OauthClientType *string
```

- *Type:* *string

Specifies the type of client being registered. Snowflake supports both confidential and public clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#oauth_client_type OauthIntegration#oauth_client_type}

---

##### `OauthIssueRefreshTokens`<sup>Optional</sup> <a name="OauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthIssueRefreshTokens"></a>

```go
OauthIssueRefreshTokens interface{}
```

- *Type:* interface{}

Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#oauth_issue_refresh_tokens OauthIntegration#oauth_issue_refresh_tokens}

---

##### `OauthRedirectUri`<sup>Optional</sup> <a name="OauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRedirectUri"></a>

```go
OauthRedirectUri *string
```

- *Type:* *string

Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#oauth_redirect_uri OauthIntegration#oauth_redirect_uri}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRefreshTokenValidity"></a>

```go
OauthRefreshTokenValidity *f64
```

- *Type:* *f64

Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#oauth_refresh_token_validity OauthIntegration#oauth_refresh_token_validity}

---

##### `OauthUseSecondaryRoles`<sup>Optional</sup> <a name="OauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthUseSecondaryRoles"></a>

```go
OauthUseSecondaryRoles *string
```

- *Type:* *string

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/oauth_integration#oauth_use_secondary_roles OauthIntegration#oauth_use_secondary_roles}

---



