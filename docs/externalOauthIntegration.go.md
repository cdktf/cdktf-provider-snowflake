# `externalOauthIntegration` Submodule <a name="`externalOauthIntegration` Submodule" id="@cdktf/provider-snowflake.externalOauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalOauthIntegration <a name="ExternalOauthIntegration" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/externaloauthintegration"

externaloauthintegration.NewExternalOauthIntegration(scope Construct, id *string, config ExternalOauthIntegrationConfig) ExternalOauthIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig">ExternalOauthIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig">ExternalOauthIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAnyRoleMode">ResetAnyRoleMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAudienceUrls">ResetAudienceUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetBlockedRoles">ResetBlockedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetJwsKeysUrls">ResetJwsKeysUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey">ResetRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey2">ResetRsaPublicKey2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeDelimiter">ResetScopeDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeMappingAttribute">ResetScopeMappingAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAnyRoleMode` <a name="ResetAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAnyRoleMode"></a>

```go
func ResetAnyRoleMode()
```

##### `ResetAudienceUrls` <a name="ResetAudienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAudienceUrls"></a>

```go
func ResetAudienceUrls()
```

##### `ResetBlockedRoles` <a name="ResetBlockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetBlockedRoles"></a>

```go
func ResetBlockedRoles()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetJwsKeysUrls` <a name="ResetJwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetJwsKeysUrls"></a>

```go
func ResetJwsKeysUrls()
```

##### `ResetRsaPublicKey` <a name="ResetRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey"></a>

```go
func ResetRsaPublicKey()
```

##### `ResetRsaPublicKey2` <a name="ResetRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey2"></a>

```go
func ResetRsaPublicKey2()
```

##### `ResetScopeDelimiter` <a name="ResetScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeDelimiter"></a>

```go
func ResetScopeDelimiter()
```

##### `ResetScopeMappingAttribute` <a name="ResetScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeMappingAttribute"></a>

```go
func ResetScopeMappingAttribute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/externaloauthintegration"

externaloauthintegration.ExternalOauthIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/externaloauthintegration"

externaloauthintegration.ExternalOauthIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/externaloauthintegration"

externaloauthintegration.ExternalOauthIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/externaloauthintegration"

externaloauthintegration.ExternalOauthIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExternalOauthIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExternalOauthIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExternalOauthIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleModeInput">AnyRoleModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrlsInput">AudienceUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRolesInput">BlockedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrlsInput">JwsKeysUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2Input">RsaPublicKey2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKeyInput">RsaPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiterInput">ScopeDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttributeInput">ScopeMappingAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttributeInput">SnowflakeUserMappingAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaimsInput">TokenUserMappingClaimsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleMode">AnyRoleMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrls">AudienceUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRoles">BlockedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrls">JwsKeysUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey">RsaPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2">RsaPublicKey2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiter">ScopeDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttribute">ScopeMappingAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttribute">SnowflakeUserMappingAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaims">TokenUserMappingClaims</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnyRoleModeInput`<sup>Optional</sup> <a name="AnyRoleModeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleModeInput"></a>

```go
func AnyRoleModeInput() *string
```

- *Type:* *string

---

##### `AudienceUrlsInput`<sup>Optional</sup> <a name="AudienceUrlsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrlsInput"></a>

```go
func AudienceUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlockedRolesInput`<sup>Optional</sup> <a name="BlockedRolesInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRolesInput"></a>

```go
func BlockedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `JwsKeysUrlsInput`<sup>Optional</sup> <a name="JwsKeysUrlsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrlsInput"></a>

```go
func JwsKeysUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RsaPublicKey2Input`<sup>Optional</sup> <a name="RsaPublicKey2Input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2Input"></a>

```go
func RsaPublicKey2Input() *string
```

- *Type:* *string

---

##### `RsaPublicKeyInput`<sup>Optional</sup> <a name="RsaPublicKeyInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKeyInput"></a>

```go
func RsaPublicKeyInput() *string
```

- *Type:* *string

---

##### `ScopeDelimiterInput`<sup>Optional</sup> <a name="ScopeDelimiterInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiterInput"></a>

```go
func ScopeDelimiterInput() *string
```

- *Type:* *string

---

##### `ScopeMappingAttributeInput`<sup>Optional</sup> <a name="ScopeMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttributeInput"></a>

```go
func ScopeMappingAttributeInput() *string
```

- *Type:* *string

---

##### `SnowflakeUserMappingAttributeInput`<sup>Optional</sup> <a name="SnowflakeUserMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttributeInput"></a>

```go
func SnowflakeUserMappingAttributeInput() *string
```

- *Type:* *string

---

##### `TokenUserMappingClaimsInput`<sup>Optional</sup> <a name="TokenUserMappingClaimsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaimsInput"></a>

```go
func TokenUserMappingClaimsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AnyRoleMode`<sup>Required</sup> <a name="AnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleMode"></a>

```go
func AnyRoleMode() *string
```

- *Type:* *string

---

##### `AudienceUrls`<sup>Required</sup> <a name="AudienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrls"></a>

```go
func AudienceUrls() *[]*string
```

- *Type:* *[]*string

---

##### `BlockedRoles`<sup>Required</sup> <a name="BlockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRoles"></a>

```go
func BlockedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwsKeysUrls`<sup>Required</sup> <a name="JwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrls"></a>

```go
func JwsKeysUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RsaPublicKey`<sup>Required</sup> <a name="RsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey"></a>

```go
func RsaPublicKey() *string
```

- *Type:* *string

---

##### `RsaPublicKey2`<sup>Required</sup> <a name="RsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2"></a>

```go
func RsaPublicKey2() *string
```

- *Type:* *string

---

##### `ScopeDelimiter`<sup>Required</sup> <a name="ScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiter"></a>

```go
func ScopeDelimiter() *string
```

- *Type:* *string

---

##### `ScopeMappingAttribute`<sup>Required</sup> <a name="ScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttribute"></a>

```go
func ScopeMappingAttribute() *string
```

- *Type:* *string

---

##### `SnowflakeUserMappingAttribute`<sup>Required</sup> <a name="SnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttribute"></a>

```go
func SnowflakeUserMappingAttribute() *string
```

- *Type:* *string

---

##### `TokenUserMappingClaims`<sup>Required</sup> <a name="TokenUserMappingClaims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaims"></a>

```go
func TokenUserMappingClaims() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalOauthIntegrationConfig <a name="ExternalOauthIntegrationConfig" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/externaloauthintegration"

&externaloauthintegration.ExternalOauthIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Issuer: *string,
	Name: *string,
	SnowflakeUserMappingAttribute: *string,
	TokenUserMappingClaims: *[]*string,
	Type: *string,
	AllowedRoles: *[]*string,
	AnyRoleMode: *string,
	AudienceUrls: *[]*string,
	BlockedRoles: *[]*string,
	Comment: *string,
	Id: *string,
	JwsKeysUrls: *[]*string,
	RsaPublicKey: *string,
	RsaPublicKey2: *string,
	ScopeDelimiter: *string,
	ScopeMappingAttribute: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether to initiate operation of the integration or suspend it. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.snowflakeUserMappingAttribute">SnowflakeUserMappingAttribute</a></code> | <code>*string</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.tokenUserMappingClaims">TokenUserMappingClaims</a></code> | <code>*[]*string</code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.anyRoleMode">AnyRoleMode</a></code> | <code>*string</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.audienceUrls">AudienceUrls</a></code> | <code>*[]*string</code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.blockedRoles">BlockedRoles</a></code> | <code>*[]*string</code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.jwsKeysUrls">JwsKeysUrls</a></code> | <code>*[]*string</code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey">RsaPublicKey</a></code> | <code>*string</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey2">RsaPublicKey2</a></code> | <code>*string</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeDelimiter">ScopeDelimiter</a></code> | <code>*string</code> | Specifies the scope delimiter in the authorization token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeMappingAttribute">ScopeMappingAttribute</a></code> | <code>*string</code> | Specifies the access token claim to map the access token to an account role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether to initiate operation of the integration or suspend it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#issuer ExternalOauthIntegration#issuer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `SnowflakeUserMappingAttribute`<sup>Required</sup> <a name="SnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.snowflakeUserMappingAttribute"></a>

```go
SnowflakeUserMappingAttribute *string
```

- *Type:* *string

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#snowflake_user_mapping_attribute ExternalOauthIntegration#snowflake_user_mapping_attribute}

---

##### `TokenUserMappingClaims`<sup>Required</sup> <a name="TokenUserMappingClaims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.tokenUserMappingClaims"></a>

```go
TokenUserMappingClaims *[]*string
```

- *Type:* *[]*string

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#token_user_mapping_claims ExternalOauthIntegration#token_user_mapping_claims}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#type ExternalOauthIntegration#type}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

Specifies the list of roles that the client can set as the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#allowed_roles ExternalOauthIntegration#allowed_roles}

---

##### `AnyRoleMode`<sup>Optional</sup> <a name="AnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.anyRoleMode"></a>

```go
AnyRoleMode *string
```

- *Type:* *string

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#any_role_mode ExternalOauthIntegration#any_role_mode}

---

##### `AudienceUrls`<sup>Optional</sup> <a name="AudienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.audienceUrls"></a>

```go
AudienceUrls *[]*string
```

- *Type:* *[]*string

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#audience_urls ExternalOauthIntegration#audience_urls}

---

##### `BlockedRoles`<sup>Optional</sup> <a name="BlockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.blockedRoles"></a>

```go
BlockedRoles *[]*string
```

- *Type:* *[]*string

Specifies the list of roles that a client cannot set as the primary role.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#blocked_roles ExternalOauthIntegration#blocked_roles}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JwsKeysUrls`<sup>Optional</sup> <a name="JwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.jwsKeysUrls"></a>

```go
JwsKeysUrls *[]*string
```

- *Type:* *[]*string

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#jws_keys_urls ExternalOauthIntegration#jws_keys_urls}

---

##### `RsaPublicKey`<sup>Optional</sup> <a name="RsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey"></a>

```go
RsaPublicKey *string
```

- *Type:* *string

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#rsa_public_key ExternalOauthIntegration#rsa_public_key}

---

##### `RsaPublicKey2`<sup>Optional</sup> <a name="RsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey2"></a>

```go
RsaPublicKey2 *string
```

- *Type:* *string

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#rsa_public_key_2 ExternalOauthIntegration#rsa_public_key_2}

---

##### `ScopeDelimiter`<sup>Optional</sup> <a name="ScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeDelimiter"></a>

```go
ScopeDelimiter *string
```

- *Type:* *string

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#scope_delimiter ExternalOauthIntegration#scope_delimiter}

---

##### `ScopeMappingAttribute`<sup>Optional</sup> <a name="ScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeMappingAttribute"></a>

```go
ScopeMappingAttribute *string
```

- *Type:* *string

Specifies the access token claim to map the access token to an account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/external_oauth_integration#scope_mapping_attribute ExternalOauthIntegration#scope_mapping_attribute}

---



