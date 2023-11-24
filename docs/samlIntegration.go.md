# `snowflake_saml_integration`

Refer to the Terraform Registory for docs: [`snowflake_saml_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration).

# `samlIntegration` Submodule <a name="`samlIntegration` Submodule" id="@cdktf/provider-snowflake.samlIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIntegration <a name="SamlIntegration" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration snowflake_saml_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/samlintegration"

samlintegration.NewSamlIntegration(scope Construct, id *string, config SamlIntegrationConfig) SamlIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig">SamlIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig">SamlIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated">ResetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn">ResetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl">ResetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat">ResetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest">ResetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl">ResetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl">ResetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert">ResetSaml2SnowflakeX509Cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel">ResetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetSaml2EnableSpInitiated` <a name="ResetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated"></a>

```go
func ResetSaml2EnableSpInitiated()
```

##### `ResetSaml2ForceAuthn` <a name="ResetSaml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn"></a>

```go
func ResetSaml2ForceAuthn()
```

##### `ResetSaml2PostLogoutRedirectUrl` <a name="ResetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl"></a>

```go
func ResetSaml2PostLogoutRedirectUrl()
```

##### `ResetSaml2RequestedNameidFormat` <a name="ResetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat"></a>

```go
func ResetSaml2RequestedNameidFormat()
```

##### `ResetSaml2SignRequest` <a name="ResetSaml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest"></a>

```go
func ResetSaml2SignRequest()
```

##### `ResetSaml2SnowflakeAcsUrl` <a name="ResetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl"></a>

```go
func ResetSaml2SnowflakeAcsUrl()
```

##### `ResetSaml2SnowflakeIssuerUrl` <a name="ResetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl"></a>

```go
func ResetSaml2SnowflakeIssuerUrl()
```

##### `ResetSaml2SnowflakeX509Cert` <a name="ResetSaml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert"></a>

```go
func ResetSaml2SnowflakeX509Cert()
```

##### `ResetSaml2SpInitiatedLoginPageLabel` <a name="ResetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel"></a>

```go
func ResetSaml2SpInitiatedLoginPageLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/samlintegration"

samlintegration.SamlIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/samlintegration"

samlintegration.SamlIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/samlintegration"

samlintegration.SamlIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/samlintegration"

samlintegration.SamlIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SamlIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SamlIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SamlIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed">Saml2DigestMethodsUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed">Saml2SignatureMethodsUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata">Saml2SnowflakeMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput">Saml2EnableSpInitiatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput">Saml2ForceAuthnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput">Saml2IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput">Saml2PostLogoutRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput">Saml2ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput">Saml2RequestedNameidFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput">Saml2SignRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput">Saml2SnowflakeAcsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput">Saml2SnowflakeIssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput">Saml2SnowflakeX509CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput">Saml2SpInitiatedLoginPageLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput">Saml2SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput">Saml2X509CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer">Saml2Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider">Saml2Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert">Saml2SnowflakeX509Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Saml2DigestMethodsUsed`<sup>Required</sup> <a name="Saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed"></a>

```go
func Saml2DigestMethodsUsed() *string
```

- *Type:* *string

---

##### `Saml2SignatureMethodsUsed`<sup>Required</sup> <a name="Saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed"></a>

```go
func Saml2SignatureMethodsUsed() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeMetadata`<sup>Required</sup> <a name="Saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata"></a>

```go
func Saml2SnowflakeMetadata() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="Saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput"></a>

```go
func Saml2EnableSpInitiatedInput() interface{}
```

- *Type:* interface{}

---

##### `Saml2ForceAuthnInput`<sup>Optional</sup> <a name="Saml2ForceAuthnInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput"></a>

```go
func Saml2ForceAuthnInput() interface{}
```

- *Type:* interface{}

---

##### `Saml2IssuerInput`<sup>Optional</sup> <a name="Saml2IssuerInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput"></a>

```go
func Saml2IssuerInput() *string
```

- *Type:* *string

---

##### `Saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput"></a>

```go
func Saml2PostLogoutRedirectUrlInput() *string
```

- *Type:* *string

---

##### `Saml2ProviderInput`<sup>Optional</sup> <a name="Saml2ProviderInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput"></a>

```go
func Saml2ProviderInput() *string
```

- *Type:* *string

---

##### `Saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="Saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput"></a>

```go
func Saml2RequestedNameidFormatInput() *string
```

- *Type:* *string

---

##### `Saml2SignRequestInput`<sup>Optional</sup> <a name="Saml2SignRequestInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput"></a>

```go
func Saml2SignRequestInput() interface{}
```

- *Type:* interface{}

---

##### `Saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput"></a>

```go
func Saml2SnowflakeAcsUrlInput() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput"></a>

```go
func Saml2SnowflakeIssuerUrlInput() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeX509CertInput`<sup>Optional</sup> <a name="Saml2SnowflakeX509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput"></a>

```go
func Saml2SnowflakeX509CertInput() *string
```

- *Type:* *string

---

##### `Saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```go
func Saml2SpInitiatedLoginPageLabelInput() *string
```

- *Type:* *string

---

##### `Saml2SsoUrlInput`<sup>Optional</sup> <a name="Saml2SsoUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput"></a>

```go
func Saml2SsoUrlInput() *string
```

- *Type:* *string

---

##### `Saml2X509CertInput`<sup>Optional</sup> <a name="Saml2X509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput"></a>

```go
func Saml2X509CertInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Saml2EnableSpInitiated`<sup>Required</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated"></a>

```go
func Saml2EnableSpInitiated() interface{}
```

- *Type:* interface{}

---

##### `Saml2ForceAuthn`<sup>Required</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn"></a>

```go
func Saml2ForceAuthn() interface{}
```

- *Type:* interface{}

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer"></a>

```go
func Saml2Issuer() *string
```

- *Type:* *string

---

##### `Saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl"></a>

```go
func Saml2PostLogoutRedirectUrl() *string
```

- *Type:* *string

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider"></a>

```go
func Saml2Provider() *string
```

- *Type:* *string

---

##### `Saml2RequestedNameidFormat`<sup>Required</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat"></a>

```go
func Saml2RequestedNameidFormat() *string
```

- *Type:* *string

---

##### `Saml2SignRequest`<sup>Required</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest"></a>

```go
func Saml2SignRequest() interface{}
```

- *Type:* interface{}

---

##### `Saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl"></a>

```go
func Saml2SnowflakeAcsUrl() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl"></a>

```go
func Saml2SnowflakeIssuerUrl() *string
```

- *Type:* *string

---

##### `Saml2SnowflakeX509Cert`<sup>Required</sup> <a name="Saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert"></a>

```go
func Saml2SnowflakeX509Cert() *string
```

- *Type:* *string

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel"></a>

```go
func Saml2SpInitiatedLoginPageLabel() *string
```

- *Type:* *string

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl"></a>

```go
func Saml2SsoUrl() *string
```

- *Type:* *string

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert"></a>

```go
func Saml2X509Cert() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIntegrationConfig <a name="SamlIntegrationConfig" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v10/samlintegration"

&samlintegration.SamlIntegrationConfig {
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
	Enabled: interface{},
	Id: *string,
	Saml2EnableSpInitiated: interface{},
	Saml2ForceAuthn: interface{},
	Saml2PostLogoutRedirectUrl: *string,
	Saml2RequestedNameidFormat: *string,
	Saml2SignRequest: interface{},
	Saml2SnowflakeAcsUrl: *string,
	Saml2SnowflakeIssuerUrl: *string,
	Saml2SnowflakeX509Cert: *string,
	Saml2SpInitiatedLoginPageLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer">Saml2Issuer</a></code> | <code>*string</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider">Saml2Provider</a></code> | <code>*string</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl">Saml2SsoUrl</a></code> | <code>*string</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert">Saml2X509Cert</a></code> | <code>*string</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated">Saml2EnableSpInitiated</a></code> | <code>interface{}</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn">Saml2ForceAuthn</a></code> | <code>interface{}</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl">Saml2PostLogoutRedirectUrl</a></code> | <code>*string</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat">Saml2RequestedNameidFormat</a></code> | <code>*string</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest">Saml2SignRequest</a></code> | <code>interface{}</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl">Saml2SnowflakeAcsUrl</a></code> | <code>*string</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl">Saml2SnowflakeIssuerUrl</a></code> | <code>*string</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert">Saml2SnowflakeX509Cert</a></code> | <code>*string</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel">Saml2SpInitiatedLoginPageLabel</a></code> | <code>*string</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `Saml2Issuer`<sup>Required</sup> <a name="Saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer"></a>

```go
Saml2Issuer *string
```

- *Type:* *string

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `Saml2Provider`<sup>Required</sup> <a name="Saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider"></a>

```go
Saml2Provider *string
```

- *Type:* *string

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `Saml2SsoUrl`<sup>Required</sup> <a name="Saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl"></a>

```go
Saml2SsoUrl *string
```

- *Type:* *string

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `Saml2X509Cert`<sup>Required</sup> <a name="Saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert"></a>

```go
Saml2X509Cert *string
```

- *Type:* *string

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Saml2EnableSpInitiated`<sup>Optional</sup> <a name="Saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated"></a>

```go
Saml2EnableSpInitiated interface{}
```

- *Type:* interface{}

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `Saml2ForceAuthn`<sup>Optional</sup> <a name="Saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn"></a>

```go
Saml2ForceAuthn interface{}
```

- *Type:* interface{}

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `Saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="Saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```go
Saml2PostLogoutRedirectUrl *string
```

- *Type:* *string

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `Saml2RequestedNameidFormat`<sup>Optional</sup> <a name="Saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat"></a>

```go
Saml2RequestedNameidFormat *string
```

- *Type:* *string

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `Saml2SignRequest`<sup>Optional</sup> <a name="Saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest"></a>

```go
Saml2SignRequest interface{}
```

- *Type:* interface{}

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `Saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="Saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```go
Saml2SnowflakeAcsUrl *string
```

- *Type:* *string

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `Saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="Saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```go
Saml2SnowflakeIssuerUrl *string
```

- *Type:* *string

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `Saml2SnowflakeX509Cert`<sup>Optional</sup> <a name="Saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert"></a>

```go
Saml2SnowflakeX509Cert *string
```

- *Type:* *string

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `Saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="Saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```go
Saml2SpInitiatedLoginPageLabel *string
```

- *Type:* *string

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---



