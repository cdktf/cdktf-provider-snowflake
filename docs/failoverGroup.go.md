# `snowflake_failover_group`

Refer to the Terraform Registory for docs: [`snowflake_failover_group`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group).

# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktf/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.NewFailoverGroup(scope Construct, id *string, config FailoverGroupConfig) FailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica">PutFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule">PutReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts">ResetAllowedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">ResetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">ResetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">ResetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica">ResetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">ResetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes">ResetObjectTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">ResetReplicationSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFromReplica` <a name="PutFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica"></a>

```go
func PutFromReplica(value FailoverGroupFromReplica)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `PutReplicationSchedule` <a name="PutReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule"></a>

```go
func PutReplicationSchedule(value FailoverGroupReplicationSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `ResetAllowedAccounts` <a name="ResetAllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts"></a>

```go
func ResetAllowedAccounts()
```

##### `ResetAllowedDatabases` <a name="ResetAllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```go
func ResetAllowedDatabases()
```

##### `ResetAllowedIntegrationTypes` <a name="ResetAllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```go
func ResetAllowedIntegrationTypes()
```

##### `ResetAllowedShares` <a name="ResetAllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```go
func ResetAllowedShares()
```

##### `ResetFromReplica` <a name="ResetFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica"></a>

```go
func ResetFromReplica()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreEditionCheck` <a name="ResetIgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```go
func ResetIgnoreEditionCheck()
```

##### `ResetObjectTypes` <a name="ResetObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes"></a>

```go
func ResetObjectTypes()
```

##### `ResetReplicationSchedule` <a name="ResetReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```go
func ResetReplicationSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.FailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.FailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.FailoverGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica">FromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">ReplicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">AllowedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">AllowedDatabasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">AllowedIntegrationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">AllowedSharesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput">FromReplicaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">IgnoreEditionCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">ObjectTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">AllowedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">AllowedDatabases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">AllowedShares</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">ObjectTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FromReplica`<sup>Required</sup> <a name="FromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica"></a>

```go
func FromReplica() FailoverGroupFromReplicaOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a>

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```go
func ReplicationSchedule() FailoverGroupReplicationScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a>

---

##### `AllowedAccountsInput`<sup>Optional</sup> <a name="AllowedAccountsInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```go
func AllowedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDatabasesInput`<sup>Optional</sup> <a name="AllowedDatabasesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```go
func AllowedDatabasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIntegrationTypesInput`<sup>Optional</sup> <a name="AllowedIntegrationTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```go
func AllowedIntegrationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSharesInput`<sup>Optional</sup> <a name="AllowedSharesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```go
func AllowedSharesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FromReplicaInput`<sup>Optional</sup> <a name="FromReplicaInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput"></a>

```go
func FromReplicaInput() FailoverGroupFromReplica
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreEditionCheckInput`<sup>Optional</sup> <a name="IgnoreEditionCheckInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```go
func IgnoreEditionCheckInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectTypesInput`<sup>Optional</sup> <a name="ObjectTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```go
func ObjectTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```go
func ReplicationScheduleInput() FailoverGroupReplicationSchedule
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```go
func AllowedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDatabases`<sup>Required</sup> <a name="AllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```go
func AllowedDatabases() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```go
func AllowedIntegrationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedShares`<sup>Required</sup> <a name="AllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```go
func AllowedShares() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreEditionCheck`<sup>Required</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```go
func IgnoreEditionCheck() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```go
func ObjectTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

&failovergroup.FailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowedAccounts: *[]*string,
	AllowedDatabases: *[]*string,
	AllowedIntegrationTypes: *[]*string,
	AllowedShares: *[]*string,
	FromReplica: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7.failoverGroup.FailoverGroupFromReplica,
	Id: *string,
	IgnoreEditionCheck: interface{},
	ObjectTypes: *[]*string,
	ReplicationSchedule: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7.failoverGroup.FailoverGroupReplicationSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">AllowedAccounts</a></code> | <code>*[]*string</code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">AllowedDatabases</a></code> | <code>*[]*string</code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>*[]*string</code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">AllowedShares</a></code> | <code>*[]*string</code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica">FromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>interface{}</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">ObjectTypes</a></code> | <code>*[]*string</code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#name FailoverGroup#name}

---

##### `AllowedAccounts`<sup>Optional</sup> <a name="AllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```go
AllowedAccounts *[]*string
```

- *Type:* *[]*string

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `AllowedDatabases`<sup>Optional</sup> <a name="AllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```go
AllowedDatabases *[]*string
```

- *Type:* *[]*string

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `AllowedIntegrationTypes`<sup>Optional</sup> <a name="AllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```go
AllowedIntegrationTypes *[]*string
```

- *Type:* *[]*string

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `AllowedShares`<sup>Optional</sup> <a name="AllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```go
AllowedShares *[]*string
```

- *Type:* *[]*string

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `FromReplica`<sup>Optional</sup> <a name="FromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica"></a>

```go
FromReplica FailoverGroupFromReplica
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreEditionCheck`<sup>Optional</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```go
IgnoreEditionCheck interface{}
```

- *Type:* interface{}

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `ObjectTypes`<sup>Optional</sup> <a name="ObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```go
ObjectTypes *[]*string
```

- *Type:* *[]*string

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `ReplicationSchedule`<sup>Optional</sup> <a name="ReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```go
ReplicationSchedule FailoverGroupReplicationSchedule
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

### FailoverGroupFromReplica <a name="FailoverGroupFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

&failovergroup.FailoverGroupFromReplica {
	Name: *string,
	OrganizationName: *string,
	SourceAccountName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name">Name</a></code> | <code>*string</code> | Identifier for the primary failover group in the source account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Name of your Snowflake organization. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName">SourceAccountName</a></code> | <code>*string</code> | Source account from which you are enabling replication and failover of the specified objects. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier for the primary failover group in the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#name FailoverGroup#name}

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Name of your Snowflake organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#organization_name FailoverGroup#organization_name}

---

##### `SourceAccountName`<sup>Required</sup> <a name="SourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName"></a>

```go
SourceAccountName *string
```

- *Type:* *string

Source account from which you are enabling replication and failover of the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}

---

### FailoverGroupReplicationSchedule <a name="FailoverGroupReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

&failovergroup.FailoverGroupReplicationSchedule {
	Cron: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7.failoverGroup.FailoverGroupReplicationScheduleCron,
	Interval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron">Cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | cron block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval">Interval</a></code> | <code>*f64</code> | Specifies the interval in minutes for the replication schedule. |

---

##### `Cron`<sup>Optional</sup> <a name="Cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron"></a>

```go
Cron FailoverGroupReplicationScheduleCron
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#cron FailoverGroup#cron}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Specifies the interval in minutes for the replication schedule.

The interval must be greater than 0 and less than 1440 (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#interval FailoverGroup#interval}

---

### FailoverGroupReplicationScheduleCron <a name="FailoverGroupReplicationScheduleCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

&failovergroup.FailoverGroupReplicationScheduleCron {
	Expression: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression">Expression</a></code> | <code>*string</code> | Specifies the cron expression for the replication schedule. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone">TimeZone</a></code> | <code>*string</code> | Specifies the time zone for secondary group refresh. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Specifies the cron expression for the replication schedule.

The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#expression FailoverGroup#expression}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Specifies the time zone for secondary group refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/failover_group#time_zone FailoverGroup#time_zone}

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupFromReplicaOutputReference <a name="FailoverGroupFromReplicaOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.NewFailoverGroupFromReplicaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FailoverGroupFromReplicaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput">SourceAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName">SourceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `SourceAccountNameInput`<sup>Optional</sup> <a name="SourceAccountNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput"></a>

```go
func SourceAccountNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `SourceAccountName`<sup>Required</sup> <a name="SourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName"></a>

```go
func SourceAccountName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue"></a>

```go
func InternalValue() FailoverGroupFromReplica
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---


### FailoverGroupReplicationScheduleCronOutputReference <a name="FailoverGroupReplicationScheduleCronOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.NewFailoverGroupReplicationScheduleCronOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FailoverGroupReplicationScheduleCronOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue"></a>

```go
func InternalValue() FailoverGroupReplicationScheduleCron
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---


### FailoverGroupReplicationScheduleOutputReference <a name="FailoverGroupReplicationScheduleOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/failovergroup"

failovergroup.NewFailoverGroupReplicationScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FailoverGroupReplicationScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron">PutCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron">ResetCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCron` <a name="PutCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron"></a>

```go
func PutCron(value FailoverGroupReplicationScheduleCron)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `ResetCron` <a name="ResetCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron"></a>

```go
func ResetCron()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval"></a>

```go
func ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron">Cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput">CronInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron"></a>

```go
func Cron() FailoverGroupReplicationScheduleCronOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a>

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput"></a>

```go
func CronInput() FailoverGroupReplicationScheduleCron
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() FailoverGroupReplicationSchedule
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---



