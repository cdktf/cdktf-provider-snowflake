# `saml2Integration` Submodule <a name="`saml2Integration` Submodule" id="@cdktf/provider-snowflake.saml2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Saml2Integration <a name="Saml2Integration" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration snowflake_saml2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2Integration(scope Construct, id *string, config Saml2IntegrationConfig) Saml2Integration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig">Saml2IntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig">Saml2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns">ResetAllowedEmailPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains">ResetAllowedUserDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated">ResetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn">ResetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl">ResetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat">ResetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest">ResetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl">ResetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl">ResetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel">ResetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts"></a>

```go
func PutTimeouts(value Saml2IntegrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

---

##### `ResetAllowedEmailPatterns` <a name="ResetAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns"></a>

```go
func ResetAllowedEmailPatterns()
```

##### `ResetAllowedUserDomains` <a name="ResetAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains"></a>

```go
func ResetAllowedUserDomains()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId"></a>

```go
func ResetId()
```

##### `ResetSaml2EnableSpInitiated` <a name="ResetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated"></a>

```go
func ResetSaml2EnableSpInitiated()
```

##### `ResetSaml2ForceAuthn` <a name="ResetSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn"></a>

```go
func ResetSaml2ForceAuthn()
```

##### `ResetSaml2PostLogoutRedirectUrl` <a name="ResetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl"></a>

```go
func ResetSaml2PostLogoutRedirectUrl()
```

##### `ResetSaml2RequestedNameidFormat` <a name="ResetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat"></a>

```go
func ResetSaml2RequestedNameidFormat()
```

##### `ResetSaml2SignRequest` <a name="ResetSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest"></a>

```go
func ResetSaml2SignRequest()
```

##### `ResetSaml2SnowflakeAcsUrl` <a name="ResetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl"></a>

```go
func ResetSaml2SnowflakeAcsUrl()
```

##### `ResetSaml2SnowflakeIssuerUrl` <a name="ResetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl"></a>

```go
func ResetSaml2SnowflakeIssuerUrl()
```

##### `ResetSaml2SpInitiatedLoginPageLabel` <a name="ResetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel"></a>

```go
func ResetSaml2SpInitiatedLoginPageLabel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.Saml2Integration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.Saml2Integration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.Saml2Integration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.Saml2Integration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Saml2Integration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Saml2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Saml2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput">AllowedEmailPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput">AllowedUserDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput">EnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput">Saml2EnableSpInitiatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput">Saml2ForceAuthnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput">Saml2IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput">Saml2PostLogoutRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput">Saml2ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput">Saml2RequestedNameidFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput">Saml2SignRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput">Saml2SnowflakeAcsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput">Saml2SnowflakeIssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput">Saml2SpInitiatedLoginPageLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput">Saml2SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput">Saml2X509CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns">AllowedEmailPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains">AllowedUserDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled">Enabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer">Saml2Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider">Saml2Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput"></a>

```go
func DescribeOutput() Saml2IntegrationDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput"></a>

```go
func ShowOutput() Saml2IntegrationShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts"></a>

```go
func Timeouts() Saml2IntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a>

---

##### `AllowedEmailPatternsInput`<sup>Optional</sup> <a name="AllowedEmailPatternsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput"></a>

```go
func AllowedEmailPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUserDomainsInput`<sup>Optional</sup> <a name="AllowedUserDomainsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput"></a>

```go
func AllowedUserDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput"></a>

```go
func EnabledInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="Saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput"></a>

```go
func Saml2EnableSpInitiatedInput() *string
```

- *Type:* *string

---

##### `Saml2ForceAuthnInput`<sup>Optional</sup> <a name="Saml2ForceAuthnInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput"></a>

```go
func Saml2ForceAuthnInput() *string
```

- *Type:* *string

---

##### `Saml2IssuerInput`<sup>Optional</sup> <a name="Saml2IssuerInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput"></a>

```go
func Saml2IssuerInput() *string
```

- *Type:* *string

---

##### `Saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput"></a>

```go
func Saml2PostLogoutRedirectUrlInput() *string
```

- *Type:* *string

---

##### `Saml2ProviderInput`<sup>Optional</sup> <a name="Saml2ProviderInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput"></a>

```go
func Saml2ProviderInput() *string
```

- *Type:* *string

---

##### `Saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="Saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput"></a>

```go
func Saml2RequestedNameidFormatInput() *string
```

- *Type:* *string

---

##### `Saml2SignRequestInput`<sup>Optional</sup> <a name="Saml2SignRequestInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput"></a>

```go
func Saml2SignRequestInput() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput"></a>

```go
func Saml2SnowflakeAcsUrlInput() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput"></a>

```go
func Saml2SnowflakeIssuerUrlInput() *string
```

- *Type:* *string

---

##### `Saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```go
func Saml2SpInitiatedLoginPageLabelInput() *string
```

- *Type:* *string

---

##### `Saml2SsoUrlInput`<sup>Optional</sup> <a name="Saml2SsoUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput"></a>

```go
func Saml2SsoUrlInput() *string
```

- *Type:* *string

---

##### `Saml2X509CertInput`<sup>Optional</sup> <a name="Saml2X509CertInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput"></a>

```go
func Saml2X509CertInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedEmailPatterns`<sup>Required</sup> <a name="AllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns"></a>

```go
func AllowedEmailPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUserDomains`<sup>Required</sup> <a name="AllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains"></a>

```go
func AllowedUserDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled"></a>

```go
func Enabled() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Saml2EnableSpInitiated`<sup>Required</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated"></a>

```go
func Saml2EnableSpInitiated() *string
```

- *Type:* *string

---

##### `Saml2ForceAuthn`<sup>Required</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn"></a>

```go
func Saml2ForceAuthn() *string
```

- *Type:* *string

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer"></a>

```go
func Saml2Issuer() *string
```

- *Type:* *string

---

##### `Saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl"></a>

```go
func Saml2PostLogoutRedirectUrl() *string
```

- *Type:* *string

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider"></a>

```go
func Saml2Provider() *string
```

- *Type:* *string

---

##### `Saml2RequestedNameidFormat`<sup>Required</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat"></a>

```go
func Saml2RequestedNameidFormat() *string
```

- *Type:* *string

---

##### `Saml2SignRequest`<sup>Required</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest"></a>

```go
func Saml2SignRequest() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl"></a>

```go
func Saml2SnowflakeAcsUrl() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl"></a>

```go
func Saml2SnowflakeIssuerUrl() *string
```

- *Type:* *string

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel"></a>

```go
func Saml2SpInitiatedLoginPageLabel() *string
```

- *Type:* *string

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl"></a>

```go
func Saml2SsoUrl() *string
```

- *Type:* *string

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert"></a>

```go
func Saml2X509Cert() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Saml2IntegrationConfig <a name="Saml2IntegrationConfig" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Saml2Issuer: *string,
	Saml2Provider: *string,
	Saml2SsoUrl: *string,
	Saml2X509Cert: *string,
	AllowedEmailPatterns: *[]*string,
	AllowedUserDomains: *[]*string,
	Comment: *string,
	Enabled: *string,
	Id: *string,
	Saml2EnableSpInitiated: *string,
	Saml2ForceAuthn: *string,
	Saml2PostLogoutRedirectUrl: *string,
	Saml2RequestedNameidFormat: *string,
	Saml2SignRequest: *string,
	Saml2SnowflakeAcsUrl: *string,
	Saml2SnowflakeIssuerUrl: *string,
	Saml2SpInitiatedLoginPageLabel: *string,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.saml2Integration.Saml2IntegrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer">Saml2Issuer</a></code> | <code>*string</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider">Saml2Provider</a></code> | <code>*string</code> | The string describing the IdP. Valid options are: `OKTA` \| `ADFS` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>*string</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>*string</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns">AllowedEmailPatterns</a></code> | <code>*[]*string</code> | A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains">AllowedUserDomains</a></code> | <code>*[]*string</code> | A list of email domains that can authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled">Enabled</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#id Saml2Integration#id}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>*string</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>*string</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>*string</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>*string</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>*string</code> | The string containing the label to display after the Log In With button on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#name Saml2Integration#name}

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer"></a>

```go
Saml2Issuer *string
```

- *Type:* *string

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_issuer Saml2Integration#saml2_issuer}

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider"></a>

```go
Saml2Provider *string
```

- *Type:* *string

The string describing the IdP. Valid options are: `OKTA` | `ADFS` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_provider Saml2Integration#saml2_provider}

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl"></a>

```go
Saml2SsoUrl *string
```

- *Type:* *string

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_sso_url Saml2Integration#saml2_sso_url}

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert"></a>

```go
Saml2X509Cert *string
```

- *Type:* *string

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_x509_cert Saml2Integration#saml2_x509_cert}

---

##### `AllowedEmailPatterns`<sup>Optional</sup> <a name="AllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns"></a>

```go
AllowedEmailPatterns *[]*string
```

- *Type:* *[]*string

A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#allowed_email_patterns Saml2Integration#allowed_email_patterns}

---

##### `AllowedUserDomains`<sup>Optional</sup> <a name="AllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains"></a>

```go
AllowedUserDomains *[]*string
```

- *Type:* *[]*string

A list of email domains that can authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#allowed_user_domains Saml2Integration#allowed_user_domains}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#comment Saml2Integration#comment}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled"></a>

```go
Enabled *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#enabled Saml2Integration#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#id Saml2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Saml2EnableSpInitiated`<sup>Optional</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated"></a>

```go
Saml2EnableSpInitiated *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in With button on the login page. FALSE: does not display the Log in With button on the login page. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_enable_sp_initiated Saml2Integration#saml2_enable_sp_initiated}

---

##### `Saml2ForceAuthn`<sup>Optional</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn"></a>

```go
Saml2ForceAuthn *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_force_authn Saml2Integration#saml2_force_authn}

---

##### `Saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```go
Saml2PostLogoutRedirectUrl *string
```

- *Type:* *string

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_post_logout_redirect_url Saml2Integration#saml2_post_logout_redirect_url}

---

##### `Saml2RequestedNameidFormat`<sup>Optional</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat"></a>

```go
Saml2RequestedNameidFormat *string
```

- *Type:* *string

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` | `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` | `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` | `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` | `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_requested_nameid_format Saml2Integration#saml2_requested_nameid_format}

---

##### `Saml2SignRequest`<sup>Optional</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest"></a>

```go
Saml2SignRequest *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_sign_request Saml2Integration#saml2_sign_request}

---

##### `Saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```go
Saml2SnowflakeAcsUrl *string
```

- *Type:* *string

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_snowflake_acs_url Saml2Integration#saml2_snowflake_acs_url}

---

##### `Saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```go
Saml2SnowflakeIssuerUrl *string
```

- *Type:* *string

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_snowflake_issuer_url Saml2Integration#saml2_snowflake_issuer_url}

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```go
Saml2SpInitiatedLoginPageLabel *string
```

- *Type:* *string

The string containing the label to display after the Log In With button on the login page.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#saml2_sp_initiated_login_page_label Saml2Integration#saml2_sp_initiated_login_page_label}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts"></a>

```go
Timeouts Saml2IntegrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#timeouts Saml2Integration#timeouts}

---

### Saml2IntegrationDescribeOutput <a name="Saml2IntegrationDescribeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutput {

}
```


### Saml2IntegrationDescribeOutputAllowedEmailPatterns <a name="Saml2IntegrationDescribeOutputAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns {

}
```


### Saml2IntegrationDescribeOutputAllowedUserDomains <a name="Saml2IntegrationDescribeOutputAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputAllowedUserDomains {

}
```


### Saml2IntegrationDescribeOutputComment <a name="Saml2IntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputComment {

}
```


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed {

}
```


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiated <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated {

}
```


### Saml2IntegrationDescribeOutputSaml2ForceAuthn <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn {

}
```


### Saml2IntegrationDescribeOutputSaml2Issuer <a name="Saml2IntegrationDescribeOutputSaml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2Issuer {

}
```


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl {

}
```


### Saml2IntegrationDescribeOutputSaml2Provider <a name="Saml2IntegrationDescribeOutputSaml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2Provider {

}
```


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat {

}
```


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed {

}
```


### Saml2IntegrationDescribeOutputSaml2SignRequest <a name="Saml2IntegrationDescribeOutputSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SignRequest {

}
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl {

}
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl {

}
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata {

}
```


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel {

}
```


### Saml2IntegrationDescribeOutputSaml2SsoUrl <a name="Saml2IntegrationDescribeOutputSaml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationDescribeOutputSaml2SsoUrl {

}
```


### Saml2IntegrationShowOutput <a name="Saml2IntegrationShowOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationShowOutput {

}
```


### Saml2IntegrationTimeouts <a name="Saml2IntegrationTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

&saml2integration.Saml2IntegrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#create Saml2Integration#create}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#delete Saml2Integration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#read Saml2Integration#read}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#update Saml2Integration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#create Saml2Integration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#delete Saml2Integration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#read Saml2Integration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/saml2_integration#update Saml2Integration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Saml2IntegrationDescribeOutputAllowedEmailPatternsList <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputAllowedEmailPatternsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputAllowedEmailPatternsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputAllowedEmailPatterns
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a>

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsList <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputAllowedUserDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputAllowedUserDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputAllowedUserDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputAllowedUserDomains
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a>

---


### Saml2IntegrationDescribeOutputCommentList <a name="Saml2IntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputCommentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputCommentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputCommentOutputReference <a name="Saml2IntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputCommentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputCommentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputComment
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a>

---


### Saml2IntegrationDescribeOutputList <a name="Saml2IntegrationDescribeOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputOutputReference <a name="Saml2IntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns">AllowedEmailPatterns</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains">AllowedUserDomains</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed">Saml2DigestMethodsUsed</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer">Saml2Issuer</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider">Saml2Provider</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed">Saml2SignatureMethodsUsed</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest">Saml2SignRequest</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata">Saml2SnowflakeMetadata</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedEmailPatterns`<sup>Required</sup> <a name="AllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns"></a>

```go
func AllowedEmailPatterns() Saml2IntegrationDescribeOutputAllowedEmailPatternsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a>

---

##### `AllowedUserDomains`<sup>Required</sup> <a name="AllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains"></a>

```go
func AllowedUserDomains() Saml2IntegrationDescribeOutputAllowedUserDomainsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() Saml2IntegrationDescribeOutputCommentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a>

---

##### `Saml2DigestMethodsUsed`<sup>Required</sup> <a name="Saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed"></a>

```go
func Saml2DigestMethodsUsed() Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a>

---

##### `Saml2EnableSpInitiated`<sup>Required</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated"></a>

```go
func Saml2EnableSpInitiated() Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a>

---

##### `Saml2ForceAuthn`<sup>Required</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn"></a>

```go
func Saml2ForceAuthn() Saml2IntegrationDescribeOutputSaml2ForceAuthnList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a>

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer"></a>

```go
func Saml2Issuer() Saml2IntegrationDescribeOutputSaml2IssuerList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a>

---

##### `Saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl"></a>

```go
func Saml2PostLogoutRedirectUrl() Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a>

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider"></a>

```go
func Saml2Provider() Saml2IntegrationDescribeOutputSaml2ProviderList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a>

---

##### `Saml2RequestedNameidFormat`<sup>Required</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat"></a>

```go
func Saml2RequestedNameidFormat() Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a>

---

##### `Saml2SignatureMethodsUsed`<sup>Required</sup> <a name="Saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed"></a>

```go
func Saml2SignatureMethodsUsed() Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a>

---

##### `Saml2SignRequest`<sup>Required</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest"></a>

```go
func Saml2SignRequest() Saml2IntegrationDescribeOutputSaml2SignRequestList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a>

---

##### `Saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl"></a>

```go
func Saml2SnowflakeAcsUrl() Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a>

---

##### `Saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl"></a>

```go
func Saml2SnowflakeIssuerUrl() Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a>

---

##### `Saml2SnowflakeMetadata`<sup>Required</sup> <a name="Saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata"></a>

```go
func Saml2SnowflakeMetadata() Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a>

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel"></a>

```go
func Saml2SpInitiatedLoginPageLabel() Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a>

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl"></a>

```go
func Saml2SsoUrl() Saml2IntegrationDescribeOutputSaml2SsoUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a>

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2DigestMethodsUsedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2EnableSpInitiatedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2EnableSpInitiated
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a>

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnList <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2ForceAuthnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2ForceAuthnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2ForceAuthn
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a>

---


### Saml2IntegrationDescribeOutputSaml2IssuerList <a name="Saml2IntegrationDescribeOutputSaml2IssuerList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2IssuerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2IssuerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2IssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2IssuerOutputReference <a name="Saml2IntegrationDescribeOutputSaml2IssuerOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2IssuerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2IssuerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2Issuer
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a>

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2ProviderList <a name="Saml2IntegrationDescribeOutputSaml2ProviderList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2ProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2ProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2ProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2ProviderOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ProviderOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2ProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2ProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2Provider
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a>

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2RequestedNameidFormatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a>

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2SignRequestList <a name="Saml2IntegrationDescribeOutputSaml2SignRequestList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SignRequestList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SignRequestList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SignRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SignRequest
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SnowflakeMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a>

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a>

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlList <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SsoUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationDescribeOutputSaml2SsoUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get"></a>

```go
func Get(index *f64) Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationDescribeOutputSaml2SsoUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationDescribeOutputSaml2SsoUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a>

---


### Saml2IntegrationShowOutputList <a name="Saml2IntegrationShowOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Saml2IntegrationShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get"></a>

```go
func Get(index *f64) Saml2IntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Saml2IntegrationShowOutputOutputReference <a name="Saml2IntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Saml2IntegrationShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() Saml2IntegrationShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a>

---


### Saml2IntegrationTimeoutsOutputReference <a name="Saml2IntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/saml2integration"

saml2integration.NewSaml2IntegrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Saml2IntegrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



