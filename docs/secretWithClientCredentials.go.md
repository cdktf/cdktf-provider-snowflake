# `secretWithClientCredentials` Submodule <a name="`secretWithClientCredentials` Submodule" id="@cdktf/provider-snowflake.secretWithClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithClientCredentials <a name="SecretWithClientCredentials" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials snowflake_secret_with_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.NewSecretWithClientCredentials(scope Construct, id *string, config SecretWithClientCredentialsConfig) SecretWithClientCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig">SecretWithClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig">SecretWithClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.putTimeouts"></a>

```go
func PutTimeouts(value SecretWithClientCredentialsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts">SecretWithClientCredentialsTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.SecretWithClientCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.SecretWithClientCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.SecretWithClientCredentials_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.SecretWithClientCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecretWithClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretWithClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretWithClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList">SecretWithClientCredentialsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList">SecretWithClientCredentialsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference">SecretWithClientCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthentication">ApiAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.describeOutput"></a>

```go
func DescribeOutput() SecretWithClientCredentialsDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList">SecretWithClientCredentialsDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.showOutput"></a>

```go
func ShowOutput() SecretWithClientCredentialsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList">SecretWithClientCredentialsShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.timeouts"></a>

```go
func Timeouts() SecretWithClientCredentialsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference">SecretWithClientCredentialsTimeoutsOutputReference</a>

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthenticationInput"></a>

```go
func ApiAuthenticationInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.apiAuthentication"></a>

```go
func ApiAuthentication() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithClientCredentialsConfig <a name="SecretWithClientCredentialsConfig" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

&secretwithclientcredentials.SecretWithClientCredentialsConfig {
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
	OauthScopes: *[]*string,
	Schema: *string,
	Comment: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.secretWithClientCredentials.SecretWithClientCredentialsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.apiAuthentication">ApiAuthentication</a></code> | <code>*string</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.name">Name</a></code> | <code>*string</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | Specifies a list of scopes to use when making a request from the OAuth server by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#id SecretWithClientCredentials#id}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts">SecretWithClientCredentialsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.apiAuthentication"></a>

```go
ApiAuthentication *string
```

- *Type:* *string

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_client_credentials).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#api_authentication SecretWithClientCredentials#api_authentication}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#database SecretWithClientCredentials#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#name SecretWithClientCredentials#name}

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

Specifies a list of scopes to use when making a request from the OAuth server by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#oauth_scopes SecretWithClientCredentials#oauth_scopes}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#schema SecretWithClientCredentials#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#comment SecretWithClientCredentials#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#id SecretWithClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsConfig.property.timeouts"></a>

```go
Timeouts SecretWithClientCredentialsTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts">SecretWithClientCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#timeouts SecretWithClientCredentials#timeouts}

---

### SecretWithClientCredentialsDescribeOutput <a name="SecretWithClientCredentialsDescribeOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

&secretwithclientcredentials.SecretWithClientCredentialsDescribeOutput {

}
```


### SecretWithClientCredentialsShowOutput <a name="SecretWithClientCredentialsShowOutput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

&secretwithclientcredentials.SecretWithClientCredentialsShowOutput {

}
```


### SecretWithClientCredentialsTimeouts <a name="SecretWithClientCredentialsTimeouts" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

&secretwithclientcredentials.SecretWithClientCredentialsTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#create SecretWithClientCredentials#create}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#delete SecretWithClientCredentials#delete}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#read SecretWithClientCredentials#read}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#update SecretWithClientCredentials#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#create SecretWithClientCredentials#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#delete SecretWithClientCredentials#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#read SecretWithClientCredentials#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/secret_with_client_credentials#update SecretWithClientCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretWithClientCredentialsDescribeOutputList <a name="SecretWithClientCredentialsDescribeOutputList" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.NewSecretWithClientCredentialsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretWithClientCredentialsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.get"></a>

```go
func Get(index *f64) SecretWithClientCredentialsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretWithClientCredentialsDescribeOutputOutputReference <a name="SecretWithClientCredentialsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.NewSecretWithClientCredentialsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretWithClientCredentialsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.integrationName">IntegrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">OauthAccessTokenExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">OauthRefreshTokenExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput">SecretWithClientCredentialsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.integrationName"></a>

```go
func IntegrationName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthAccessTokenExpiryTime`<sup>Required</sup> <a name="OauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```go
func OauthAccessTokenExpiryTime() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="OauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```go
func OauthRefreshTokenExpiryTime() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretWithClientCredentialsDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsDescribeOutput">SecretWithClientCredentialsDescribeOutput</a>

---


### SecretWithClientCredentialsShowOutputList <a name="SecretWithClientCredentialsShowOutputList" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.NewSecretWithClientCredentialsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretWithClientCredentialsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.get"></a>

```go
func Get(index *f64) SecretWithClientCredentialsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretWithClientCredentialsShowOutputOutputReference <a name="SecretWithClientCredentialsShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.NewSecretWithClientCredentialsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretWithClientCredentialsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput">SecretWithClientCredentialsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretWithClientCredentialsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsShowOutput">SecretWithClientCredentialsShowOutput</a>

---


### SecretWithClientCredentialsTimeoutsOutputReference <a name="SecretWithClientCredentialsTimeoutsOutputReference" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/secretwithclientcredentials"

secretwithclientcredentials.NewSecretWithClientCredentialsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretWithClientCredentialsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.secretWithClientCredentials.SecretWithClientCredentialsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



