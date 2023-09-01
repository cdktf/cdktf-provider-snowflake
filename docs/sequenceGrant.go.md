# `snowflake_sequence_grant`

Refer to the Terraform Registory for docs: [`snowflake_sequence_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant).

# `sequenceGrant` Submodule <a name="`sequenceGrant` Submodule" id="@cdktf/provider-snowflake.sequenceGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SequenceGrant <a name="SequenceGrant" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant snowflake_sequence_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequencegrant"

sequencegrant.NewSequenceGrant(scope Construct, id *string, config SequenceGrantConfig) SequenceGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig">SequenceGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig">SequenceGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetOnAll">ResetOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetOnFuture">ResetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetRevertOwnershipToRoleName">ResetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetSequenceName">ResetSequenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetEnableMultipleGrants"></a>

```go
func ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetId"></a>

```go
func ResetId()
```

##### `ResetOnAll` <a name="ResetOnAll" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetOnAll"></a>

```go
func ResetOnAll()
```

##### `ResetOnFuture` <a name="ResetOnFuture" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetOnFuture"></a>

```go
func ResetOnFuture()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetPrivilege"></a>

```go
func ResetPrivilege()
```

##### `ResetRevertOwnershipToRoleName` <a name="ResetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetRevertOwnershipToRoleName"></a>

```go
func ResetRevertOwnershipToRoleName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSequenceName` <a name="ResetSequenceName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetSequenceName"></a>

```go
func ResetSequenceName()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.resetWithGrantOption"></a>

```go
func ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequencegrant"

sequencegrant.SequenceGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequencegrant"

sequencegrant.SequenceGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequencegrant"

sequencegrant.SequenceGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onAllInput">OnAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onFutureInput">OnFutureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.revertOwnershipToRoleNameInput">RevertOwnershipToRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.sequenceNameInput">SequenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onAll">OnAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onFuture">OnFuture</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.privilege">Privilege</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.sequenceName">SequenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.enableMultipleGrantsInput"></a>

```go
func EnableMultipleGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnAllInput`<sup>Optional</sup> <a name="OnAllInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onAllInput"></a>

```go
func OnAllInput() interface{}
```

- *Type:* interface{}

---

##### `OnFutureInput`<sup>Optional</sup> <a name="OnFutureInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onFutureInput"></a>

```go
func OnFutureInput() interface{}
```

- *Type:* interface{}

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.privilegeInput"></a>

```go
func PrivilegeInput() *string
```

- *Type:* *string

---

##### `RevertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="RevertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.revertOwnershipToRoleNameInput"></a>

```go
func RevertOwnershipToRoleNameInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SequenceNameInput`<sup>Optional</sup> <a name="SequenceNameInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.sequenceNameInput"></a>

```go
func SequenceNameInput() *string
```

- *Type:* *string

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.withGrantOptionInput"></a>

```go
func WithGrantOptionInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.enableMultipleGrants"></a>

```go
func EnableMultipleGrants() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnAll`<sup>Required</sup> <a name="OnAll" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onAll"></a>

```go
func OnAll() interface{}
```

- *Type:* interface{}

---

##### `OnFuture`<sup>Required</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.onFuture"></a>

```go
func OnFuture() interface{}
```

- *Type:* interface{}

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.privilege"></a>

```go
func Privilege() *string
```

- *Type:* *string

---

##### `RevertOwnershipToRoleName`<sup>Required</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.revertOwnershipToRoleName"></a>

```go
func RevertOwnershipToRoleName() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SequenceName`<sup>Required</sup> <a name="SequenceName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.sequenceName"></a>

```go
func SequenceName() *string
```

- *Type:* *string

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.withGrantOption"></a>

```go
func WithGrantOption() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SequenceGrantConfig <a name="SequenceGrantConfig" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/sequencegrant"

&sequencegrant.SequenceGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	Roles: *[]*string,
	EnableMultipleGrants: interface{},
	Id: *string,
	OnAll: interface{},
	OnFuture: interface{},
	Privilege: *string,
	RevertOwnershipToRoleName: *string,
	SchemaName: *string,
	SequenceName: *string,
	WithGrantOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database containing the current or future sequences on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>interface{}</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#id SequenceGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.onAll">OnAll</a></code> | <code>interface{}</code> | When this is set to true and a schema_name is provided, apply this grant on all sequences in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.onFuture">OnFuture</a></code> | <code>interface{}</code> | When this is set to true and a schema_name is provided, apply this grant on all future sequences in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.privilege">Privilege</a></code> | <code>*string</code> | The privilege to grant on the current or future sequence. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.revertOwnershipToRoleName">RevertOwnershipToRoleName</a></code> | <code>*string</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | The name of the schema containing the current or future sequences on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.sequenceName">SequenceName</a></code> | <code>*string</code> | The name of the sequence on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>interface{}</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database containing the current or future sequences on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#database_name SequenceGrant#database_name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#roles SequenceGrant#roles}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.enableMultipleGrants"></a>

```go
EnableMultipleGrants interface{}
```

- *Type:* interface{}

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#enable_multiple_grants SequenceGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#id SequenceGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAll`<sup>Optional</sup> <a name="OnAll" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.onAll"></a>

```go
OnAll interface{}
```

- *Type:* interface{}

When this is set to true and a schema_name is provided, apply this grant on all sequences in the given schema.

When this is true and no schema_name is provided apply this grant on all sequences in the given database. The sequence_name field must be unset in order to use on_all. Cannot be used together with on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#on_all SequenceGrant#on_all}

---

##### `OnFuture`<sup>Optional</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.onFuture"></a>

```go
OnFuture interface{}
```

- *Type:* interface{}

When this is set to true and a schema_name is provided, apply this grant on all future sequences in the given schema.

When this is true and no schema_name is provided apply this grant on all future sequences in the given database. The sequence_name field must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#on_future SequenceGrant#on_future}

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.privilege"></a>

```go
Privilege *string
```

- *Type:* *string

The privilege to grant on the current or future sequence. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#privilege SequenceGrant#privilege}

---

##### `RevertOwnershipToRoleName`<sup>Optional</sup> <a name="RevertOwnershipToRoleName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.revertOwnershipToRoleName"></a>

```go
RevertOwnershipToRoleName *string
```

- *Type:* *string

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#revert_ownership_to_role_name SequenceGrant#revert_ownership_to_role_name}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The name of the schema containing the current or future sequences on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#schema_name SequenceGrant#schema_name}

---

##### `SequenceName`<sup>Optional</sup> <a name="SequenceName" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.sequenceName"></a>

```go
SequenceName *string
```

- *Type:* *string

The name of the sequence on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#sequence_name SequenceGrant#sequence_name}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.sequenceGrant.SequenceGrantConfig.property.withGrantOption"></a>

```go
WithGrantOption interface{}
```

- *Type:* interface{}

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/sequence_grant#with_grant_option SequenceGrant#with_grant_option}

---



