# `secretWithAuthorizationCodeGrant` Submodule <a name="`secretWithAuthorizationCodeGrant` Submodule" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithAuthorizationCodeGrant <a name="SecretWithAuthorizationCodeGrant" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant snowflake_secret_with_authorization_code_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.NewSecretWithAuthorizationCodeGrant(scope Construct, id *string, config SecretWithAuthorizationCodeGrantConfig) SecretWithAuthorizationCodeGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig">SecretWithAuthorizationCodeGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig">SecretWithAuthorizationCodeGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts"></a>

```go
func PutTimeouts(value SecretWithAuthorizationCodeGrantTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretWithAuthorizationCodeGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretWithAuthorizationCodeGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithAuthorizationCodeGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference">SecretWithAuthorizationCodeGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput">OauthRefreshTokenExpiryTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput">OauthRefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication">ApiAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput"></a>

```go
func DescribeOutput() SecretWithAuthorizationCodeGrantDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput"></a>

```go
func ShowOutput() SecretWithAuthorizationCodeGrantShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeouts"></a>

```go
func Timeouts() SecretWithAuthorizationCodeGrantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference">SecretWithAuthorizationCodeGrantTimeoutsOutputReference</a>

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput"></a>

```go
func ApiAuthenticationInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenExpiryTimeInput`<sup>Optional</sup> <a name="OauthRefreshTokenExpiryTimeInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput"></a>

```go
func OauthRefreshTokenExpiryTimeInput() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenInput`<sup>Optional</sup> <a name="OauthRefreshTokenInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput"></a>

```go
func OauthRefreshTokenInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication"></a>

```go
func ApiAuthentication() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthRefreshToken`<sup>Required</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken"></a>

```go
func OauthRefreshToken() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime"></a>

```go
func OauthRefreshTokenExpiryTime() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithAuthorizationCodeGrantConfig <a name="SecretWithAuthorizationCodeGrantConfig" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

&secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiAuthentication: *string,
	Database: *string,
	Name: *string,
	OauthRefreshToken: *string,
	OauthRefreshTokenExpiryTime: *string,
	Schema: *string,
	Comment: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication">ApiAuthentication</a></code> | <code>*string</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name">Name</a></code> | <code>*string</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>*string</code> | Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>*string</code> | Specifies the timestamp as a string when the OAuth refresh token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication"></a>

```go
ApiAuthentication *string
```

- *Type:* *string

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_authorization_code_grant).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#api_authentication SecretWithAuthorizationCodeGrant#api_authentication}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#database SecretWithAuthorizationCodeGrant#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#name SecretWithAuthorizationCodeGrant#name}

---

##### `OauthRefreshToken`<sup>Required</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken"></a>

```go
OauthRefreshToken *string
```

- *Type:* *string

Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token SecretWithAuthorizationCodeGrant#oauth_refresh_token}

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime"></a>

```go
OauthRefreshTokenExpiryTime *string
```

- *Type:* *string

Specifies the timestamp as a string when the OAuth refresh token expires.

Accepted string formats: YYYY-MM-DD, YYYY-MM-DD HH:MI, YYYY-MM-DD HH:MI:SS, YYYY-MM-DD HH:MI <timezone>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token_expiry_time SecretWithAuthorizationCodeGrant#oauth_refresh_token_expiry_time}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#schema SecretWithAuthorizationCodeGrant#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#comment SecretWithAuthorizationCodeGrant#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.timeouts"></a>

```go
Timeouts SecretWithAuthorizationCodeGrantTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#timeouts SecretWithAuthorizationCodeGrant#timeouts}

---

### SecretWithAuthorizationCodeGrantDescribeOutput <a name="SecretWithAuthorizationCodeGrantDescribeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

&secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrantDescribeOutput {

}
```


### SecretWithAuthorizationCodeGrantShowOutput <a name="SecretWithAuthorizationCodeGrantShowOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

&secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrantShowOutput {

}
```


### SecretWithAuthorizationCodeGrantTimeouts <a name="SecretWithAuthorizationCodeGrantTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

&secretwithauthorizationcodegrant.SecretWithAuthorizationCodeGrantTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretWithAuthorizationCodeGrantDescribeOutputList <a name="SecretWithAuthorizationCodeGrantDescribeOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.NewSecretWithAuthorizationCodeGrantDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretWithAuthorizationCodeGrantDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get"></a>

```go
func Get(index *f64) SecretWithAuthorizationCodeGrantDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretWithAuthorizationCodeGrantDescribeOutputOutputReference <a name="SecretWithAuthorizationCodeGrantDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.NewSecretWithAuthorizationCodeGrantDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretWithAuthorizationCodeGrantDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName">IntegrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">OauthAccessTokenExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName"></a>

```go
func IntegrationName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthAccessTokenExpiryTime`<sup>Required</sup> <a name="OauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```go
func OauthAccessTokenExpiryTime() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```go
func OauthRefreshTokenExpiryTime() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretWithAuthorizationCodeGrantDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a>

---


### SecretWithAuthorizationCodeGrantShowOutputList <a name="SecretWithAuthorizationCodeGrantShowOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.NewSecretWithAuthorizationCodeGrantShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretWithAuthorizationCodeGrantShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get"></a>

```go
func Get(index *f64) SecretWithAuthorizationCodeGrantShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretWithAuthorizationCodeGrantShowOutputOutputReference <a name="SecretWithAuthorizationCodeGrantShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.NewSecretWithAuthorizationCodeGrantShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretWithAuthorizationCodeGrantShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretWithAuthorizationCodeGrantShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a>

---


### SecretWithAuthorizationCodeGrantTimeoutsOutputReference <a name="SecretWithAuthorizationCodeGrantTimeoutsOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithauthorizationcodegrant"

secretwithauthorizationcodegrant.NewSecretWithAuthorizationCodeGrantTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretWithAuthorizationCodeGrantTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



