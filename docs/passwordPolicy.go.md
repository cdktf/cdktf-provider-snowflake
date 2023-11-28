# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktf/provider-snowflake.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy snowflake_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/passwordpolicy"

passwordpolicy.NewPasswordPolicy(scope Construct, id *string, config PasswordPolicyConfig) PasswordPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins">ResetLockoutTimeMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays">ResetMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars">ResetMinLowerCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars">ResetMinNumericChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars">ResetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars">ResetMinUpperCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace">ResetOrReplace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists"></a>

```go
func ResetIfNotExists()
```

##### `ResetLockoutTimeMins` <a name="ResetLockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins"></a>

```go
func ResetLockoutTimeMins()
```

##### `ResetMaxAgeDays` <a name="ResetMaxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays"></a>

```go
func ResetMaxAgeDays()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetMinLowerCaseChars` <a name="ResetMinLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars"></a>

```go
func ResetMinLowerCaseChars()
```

##### `ResetMinNumericChars` <a name="ResetMinNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars"></a>

```go
func ResetMinNumericChars()
```

##### `ResetMinSpecialChars` <a name="ResetMinSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars"></a>

```go
func ResetMinSpecialChars()
```

##### `ResetMinUpperCaseChars` <a name="ResetMinUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars"></a>

```go
func ResetMinUpperCaseChars()
```

##### `ResetOrReplace` <a name="ResetOrReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace"></a>

```go
func ResetOrReplace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/passwordpolicy"

passwordpolicy.PasswordPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/passwordpolicy"

passwordpolicy.PasswordPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/passwordpolicy"

passwordpolicy.PasswordPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/passwordpolicy"

passwordpolicy.PasswordPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PasswordPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.qualifiedName">QualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput">LockoutTimeMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput">MaxAgeDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput">MinLowerCaseCharsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput">MinNumericCharsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput">MinSpecialCharsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput">MinUpperCaseCharsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput">OrReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins">LockoutTimeMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays">MaxAgeDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars">MinLowerCaseChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars">MinNumericChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars">MinSpecialChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars">MinUpperCaseChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace">OrReplace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `QualifiedName`<sup>Required</sup> <a name="QualifiedName" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.qualifiedName"></a>

```go
func QualifiedName() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput"></a>

```go
func IfNotExistsInput() interface{}
```

- *Type:* interface{}

---

##### `LockoutTimeMinsInput`<sup>Optional</sup> <a name="LockoutTimeMinsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput"></a>

```go
func LockoutTimeMinsInput() *f64
```

- *Type:* *f64

---

##### `MaxAgeDaysInput`<sup>Optional</sup> <a name="MaxAgeDaysInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput"></a>

```go
func MaxAgeDaysInput() *f64
```

- *Type:* *f64

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLowerCaseCharsInput`<sup>Optional</sup> <a name="MinLowerCaseCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput"></a>

```go
func MinLowerCaseCharsInput() *f64
```

- *Type:* *f64

---

##### `MinNumericCharsInput`<sup>Optional</sup> <a name="MinNumericCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput"></a>

```go
func MinNumericCharsInput() *f64
```

- *Type:* *f64

---

##### `MinSpecialCharsInput`<sup>Optional</sup> <a name="MinSpecialCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput"></a>

```go
func MinSpecialCharsInput() *f64
```

- *Type:* *f64

---

##### `MinUpperCaseCharsInput`<sup>Optional</sup> <a name="MinUpperCaseCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput"></a>

```go
func MinUpperCaseCharsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrReplaceInput`<sup>Optional</sup> <a name="OrReplaceInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput"></a>

```go
func OrReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists"></a>

```go
func IfNotExists() interface{}
```

- *Type:* interface{}

---

##### `LockoutTimeMins`<sup>Required</sup> <a name="LockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins"></a>

```go
func LockoutTimeMins() *f64
```

- *Type:* *f64

---

##### `MaxAgeDays`<sup>Required</sup> <a name="MaxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays"></a>

```go
func MaxAgeDays() *f64
```

- *Type:* *f64

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `MinLowerCaseChars`<sup>Required</sup> <a name="MinLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars"></a>

```go
func MinLowerCaseChars() *f64
```

- *Type:* *f64

---

##### `MinNumericChars`<sup>Required</sup> <a name="MinNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars"></a>

```go
func MinNumericChars() *f64
```

- *Type:* *f64

---

##### `MinSpecialChars`<sup>Required</sup> <a name="MinSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars"></a>

```go
func MinSpecialChars() *f64
```

- *Type:* *f64

---

##### `MinUpperCaseChars`<sup>Required</sup> <a name="MinUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars"></a>

```go
func MinUpperCaseChars() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrReplace`<sup>Required</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace"></a>

```go
func OrReplace() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/passwordpolicy"

&passwordpolicy.PasswordPolicyConfig {
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
	Comment: *string,
	Id: *string,
	IfNotExists: interface{},
	LockoutTimeMins: *f64,
	MaxAgeDays: *f64,
	MaxLength: *f64,
	MaxRetries: *f64,
	MinLength: *f64,
	MinLowerCaseChars: *f64,
	MinNumericChars: *f64,
	MinSpecialChars: *f64,
	MinUpperCaseChars: *f64,
	OrReplace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database">Database</a></code> | <code>*string</code> | The database this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Identifier for the password policy; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment">Comment</a></code> | <code>*string</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins">LockoutTimeMins</a></code> | <code>*f64</code> | Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays">MaxAgeDays</a></code> | <code>*f64</code> | Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength">MinLength</a></code> | <code>*f64</code> | Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars">MinLowerCaseChars</a></code> | <code>*f64</code> | Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars">MinNumericChars</a></code> | <code>*f64</code> | Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars">MinSpecialChars</a></code> | <code>*f64</code> | Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars">MinUpperCaseChars</a></code> | <code>*f64</code> | Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace">OrReplace</a></code> | <code>interface{}</code> | Whether to override a previous password policy with the same name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier for the password policy; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists"></a>

```go
IfNotExists interface{}
```

- *Type:* interface{}

Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `LockoutTimeMins`<sup>Optional</sup> <a name="LockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins"></a>

```go
LockoutTimeMins *f64
```

- *Type:* *f64

Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `MaxAgeDays`<sup>Optional</sup> <a name="MaxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays"></a>

```go
MaxAgeDays *f64
```

- *Type:* *f64

Specifies the maximum number of days before the password must be changed.

Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Specifies the maximum number of attempts to enter a password before being locked out.

Supported range: 1 to 10, inclusive. Default: 5

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `MinLowerCaseChars`<sup>Optional</sup> <a name="MinLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars"></a>

```go
MinLowerCaseChars *f64
```

- *Type:* *f64

Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `MinNumericChars`<sup>Optional</sup> <a name="MinNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars"></a>

```go
MinNumericChars *f64
```

- *Type:* *f64

Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `MinSpecialChars`<sup>Optional</sup> <a name="MinSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars"></a>

```go
MinSpecialChars *f64
```

- *Type:* *f64

Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `MinUpperCaseChars`<sup>Optional</sup> <a name="MinUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars"></a>

```go
MinUpperCaseChars *f64
```

- *Type:* *f64

Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `OrReplace`<sup>Optional</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace"></a>

```go
OrReplace interface{}
```

- *Type:* interface{}

Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---



